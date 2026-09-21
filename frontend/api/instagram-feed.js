const ACCOUNT_URL = "https://www.instagram.com/ganga_beauty_parlour_/";
const GRAPH_VERSION = process.env.INSTAGRAM_GRAPH_VERSION || "v20.0";
const REQUEST_TIMEOUT_MS = Number(process.env.INSTAGRAM_TIMEOUT_MS || 4500);

function normalizeMedia(item) {
  const firstChild = item.children?.data?.[0];
  const mediaType = item.media_type || firstChild?.media_type || "IMAGE";
  const isVideo = mediaType === "VIDEO" || mediaType === "REELS";
  const coverUrl =
    item.thumbnail_url ||
    firstChild?.thumbnail_url ||
    firstChild?.media_url ||
    item.media_url ||
    "";

  return {
    id: item.id,
    caption: item.caption || "",
    mediaType,
    mediaUrl: item.media_url || firstChild?.media_url || coverUrl,
    coverUrl,
    permalink: item.permalink || ACCOUNT_URL,
    timestamp: item.timestamp || "",
    isVideo,
  };
}

async function fetchInstagramMedia() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken) {
    return {
      configured: false,
      posts: [],
    };
  }

  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "timestamp",
    "children{media_type,media_url,thumbnail_url,permalink}",
  ].join(",");

  const url = userId
    ? `https://graph.facebook.com/${GRAPH_VERSION}/${userId}/media`
    : "https://graph.instagram.com/me/media";

  const params = new URLSearchParams({
    fields,
    limit: "4",
    access_token: accessToken,
  });

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const response = await fetch(`${url}?${params.toString()}`, {
    signal: controller.signal,
  }).finally(() => clearTimeout(timeoutId));
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "Instagram feed request failed");
  }

  return {
    configured: true,
    posts: (data.data || []).slice(0, 4).map(normalizeMedia),
  };
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = await fetchInstagramMedia();
    res.setHeader(
      "Cache-Control",
      "s-maxage=300, stale-while-revalidate=3600"
    );
    return res.status(200).json(payload);
  } catch {
    return res.status(502).json({
      configured: true,
      posts: [],
      error: "Unable to load Instagram feed",
    });
  }
}
