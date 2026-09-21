# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: production-audit.spec.js >> production audit >> layout integrity at 1440px
- Location: production-audit.spec.js:7:5

# Error details

```
Error: overflowing elements at 1440px

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 47

- Array []
+ Array [
+   Object {
+     "className": "hero-blur absolute inset-0 h-full w-full object-cover object-[center_top]",
+     "id": "",
+     "rect": Object {
+       "bottom": 935.9999389648438,
+       "height": 935.9999389648438,
+       "left": -28.79998779296875,
+       "right": 1468.8001098632812,
+       "top": 0,
+       "width": 1497.60009765625,
+       "x": -28.79998779296875,
+       "y": 0,
+     },
+     "tag": "IMG",
+   },
+   Object {
+     "className": "hero-main absolute inset-0 w-full h-full object-cover object-[center_top] hero-media hero-main-visible",
+     "id": "",
+     "rect": Object {
+       "bottom": 902.5509338378906,
+       "height": 908.288330078125,
+       "left": -6.630615234375,
+       "right": 1446.630615234375,
+       "top": -5.737396240234375,
+       "width": 1453.26123046875,
+       "x": -6.630615234375,
+       "y": -5.737396240234375,
+     },
+     "tag": "IMG",
+   },
+   Object {
+     "className": "absolute -right-20 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/8 blur-[110px]",
+     "id": "",
+     "rect": Object {
+       "bottom": 4372.640625,
+       "height": 224,
+       "left": 1296,
+       "right": 1520,
+       "top": 4148.640625,
+       "width": 224,
+       "x": 1296,
+       "y": 4148.640625,
+     },
+     "tag": "DIV",
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - link "Ganga Beauty Parlour logo Ganga Beauty Parlour" [ref=e7] [cursor=pointer]:
        - /url: "#top"
        - img "Ganga Beauty Parlour logo" [ref=e10]
        - generic [ref=e11]: Ganga Beauty Parlour
      - navigation [ref=e12]:
        - link "Services" [ref=e13] [cursor=pointer]:
          - /url: "#services"
        - link "Offers" [ref=e14] [cursor=pointer]:
          - /url: "#offers"
        - link "Gallery" [ref=e15] [cursor=pointer]:
          - /url: "#gallery"
        - link "Contact" [ref=e16] [cursor=pointer]:
          - /url: "#contact"
      - generic [ref=e17]:
        - generic [ref=e18]:
          - link "Call Ganga Beauty Parlour at +91 7733079941" [ref=e19] [cursor=pointer]:
            - /url: tel:+917733079941
            - img [ref=e20]
            - text: +91 7733079941
          - link "Call Ganga Beauty Parlour at +91 7014221824" [ref=e22] [cursor=pointer]:
            - /url: tel:+917014221824
            - img [ref=e23]
            - text: +91 7014221824
        - button "Book Appointment" [ref=e25] [cursor=pointer]
  - main [ref=e26]:
    - generic [ref=e27]:
      - generic [ref=e28]:
        - img [ref=e29]
        - img "Luxury bridal makeover by Ganga Beauty Parlour" [ref=e30]
      - generic:
        - img
      - generic [ref=e36]:
        - generic [ref=e37]:
          - img [ref=e38]
          - generic [ref=e40]: Premium Bridal Studio
        - heading "Your Beauty, Our Passion." [level=1] [ref=e41]:
          - text: Your Beauty,
          - text: Our Passion.
        - paragraph [ref=e42]: Luxe bridal makeup, hair styling and curated beauty rituals for your unforgettable celebration.
        - generic [ref=e43]:
          - generic [ref=e44]:
            - paragraph [ref=e45]: 4.8★
            - paragraph [ref=e46]: Google
          - generic [ref=e47]:
            - paragraph [ref=e48]: 500+
            - paragraph [ref=e49]: Brides
          - generic [ref=e50]:
            - paragraph [ref=e51]: 25+
            - paragraph [ref=e52]: Looks
        - button "Book Your Bridal Slot" [ref=e53] [cursor=pointer]:
          - text: Book Your Bridal Slot
          - img [ref=e54]
    - generic [ref=e57]:
      - generic [ref=e58]:
        - text: Why Choose Us
        - heading "A salon where craft, care and confidence come together." [level=2] [ref=e60]
      - generic [ref=e61]:
        - generic [ref=e62]:
          - img [ref=e64]
          - heading "10+ Years of Expertise" [level=3] [ref=e67]
          - paragraph [ref=e68]: A decade of refining bridal artistry, hair styling and skincare for Sujangarh's most discerning clients.
        - generic [ref=e69]:
          - img [ref=e71]
          - heading "2,500+ Happy Clients" [level=3] [ref=e76]
          - paragraph [ref=e77]: From first cuts to wedding-day glow-ups - we've been part of thousands of beautiful moments.
        - generic [ref=e78]:
          - img [ref=e80]
          - heading "Premium Products Only" [level=3] [ref=e83]
          - paragraph [ref=e84]: We use trusted international and luxury brands so every service feels uncompromising.
        - generic [ref=e85]:
          - img [ref=e87]
          - heading "Personal, Warm Service" [level=3] [ref=e89]
          - paragraph [ref=e90]: One-on-one consultations and looks tailored to your features, skin tone and personality.
    - generic [ref=e92]:
      - generic [ref=e93]:
        - generic [ref=e94]:
          - text: Our Services
          - heading "Crafted for every woman, every occasion." [level=2] [ref=e96]
        - paragraph [ref=e97]: From signature bridal looks to everyday glow - explore our full menu of beauty rituals.
      - generic [ref=e98]:
        - button "Hair Styling service at Ganga Beauty Parlour 01 / Service Hair Styling Cuts, blow-dry, curls and updos crafted to flatter your face. Reserve Session" [ref=e99] [cursor=pointer]:
          - img "Hair Styling service at Ganga Beauty Parlour" [ref=e102]
          - generic [ref=e105]:
            - paragraph [ref=e106]: 01 / Service
            - heading "Hair Styling" [level=3] [ref=e107]
            - paragraph [ref=e108]: Cuts, blow-dry, curls and updos crafted to flatter your face.
            - generic [ref=e109]:
              - text: Reserve Session
              - img [ref=e110]
        - button "Facial & Skincare service at Ganga Beauty Parlour 02 / Service Facial & Skincare Glow facials, clean-ups and clinical-grade treatments. Reserve Session" [ref=e113] [cursor=pointer]:
          - img "Facial & Skincare service at Ganga Beauty Parlour" [ref=e116]
          - generic [ref=e119]:
            - paragraph [ref=e120]: 02 / Service
            - heading "Facial & Skincare" [level=3] [ref=e121]
            - paragraph [ref=e122]: Glow facials, clean-ups and clinical-grade treatments.
            - generic [ref=e123]:
              - text: Reserve Session
              - img [ref=e124]
        - button "Waxing & Threading service at Ganga Beauty Parlour 03 / Service Waxing & Threading Smooth, gentle hair removal with premium imported waxes. Reserve Session" [ref=e127] [cursor=pointer]:
          - img "Waxing & Threading service at Ganga Beauty Parlour" [ref=e130]
          - generic [ref=e133]:
            - paragraph [ref=e134]: 03 / Service
            - heading "Waxing & Threading" [level=3] [ref=e135]
            - paragraph [ref=e136]: Smooth, gentle hair removal with premium imported waxes.
            - generic [ref=e137]:
              - text: Reserve Session
              - img [ref=e138]
        - button "Nail Artist Session service at Ganga Beauty Parlour 04 / Service Nail Artist Session Luxury nail extensions, gel polish, bridal nail art and premium manicure designs crafted with precision and elegance. Reserve Session" [ref=e141] [cursor=pointer]:
          - img "Nail Artist Session service at Ganga Beauty Parlour" [ref=e144]
          - generic [ref=e147]:
            - paragraph [ref=e148]: 04 / Service
            - heading "Nail Artist Session" [level=3] [ref=e149]
            - paragraph [ref=e150]: Luxury nail extensions, gel polish, bridal nail art and premium manicure designs crafted with precision and elegance.
            - generic [ref=e151]:
              - text: Reserve Session
              - img [ref=e152]
        - button "Bridal Makeup service at Ganga Beauty Parlour 05 / Service Bridal Makeup Signature bridal looks - engagement, haldi, mehendi and reception. Reserve Session" [ref=e155] [cursor=pointer]:
          - img "Bridal Makeup service at Ganga Beauty Parlour" [ref=e158]
          - generic [ref=e161]:
            - paragraph [ref=e162]: 05 / Service
            - heading "Bridal Makeup" [level=3] [ref=e163]
            - paragraph [ref=e164]: Signature bridal looks - engagement, haldi, mehendi and reception.
            - generic [ref=e165]:
              - text: Reserve Session
              - img [ref=e166]
        - button "Tattoo Studio service at Ganga Beauty Parlour 06 / Service Tattoo Studio Custom tattoos, fine line art, portrait tattoos and professional body ink designed with precision and hygiene. Reserve Session" [ref=e169] [cursor=pointer]:
          - img "Tattoo Studio service at Ganga Beauty Parlour" [ref=e172]
          - generic [ref=e175]:
            - paragraph [ref=e176]: 06 / Service
            - heading "Tattoo Studio" [level=3] [ref=e177]
            - paragraph [ref=e178]: Custom tattoos, fine line art, portrait tattoos and professional body ink designed with precision and hygiene.
            - generic [ref=e179]:
              - text: Reserve Session
              - img [ref=e180]
      - button "Book Consultation" [ref=e184] [cursor=pointer]
    - generic [ref=e188]:
      - generic [ref=e189]:
        - text: Luxury Ritual Menu
        - heading "Premium Bridal Services" [level=2] [ref=e191]
        - paragraph [ref=e192]: Luxury beauty, bridal glam, skin care, and hair artistry crafted for unforgettable celebrations.
      - generic [ref=e193]:
        - button "01 Bridal Glam HD Bridal Makeup Starting ₹15,000 Long-lasting HD bridal glam with flawless skin finish and luxury styling. Book Consultation" [ref=e194] [cursor=pointer]:
          - generic [ref=e197]:
            - generic [ref=e198]:
              - img [ref=e200]
              - generic [ref=e202]: "01"
            - paragraph [ref=e203]: Bridal Glam
            - heading "HD Bridal Makeup" [level=3] [ref=e204]
            - paragraph [ref=e206]: Starting ₹15,000
            - paragraph [ref=e207]: Long-lasting HD bridal glam with flawless skin finish and luxury styling.
            - generic [ref=e208]:
              - text: Book Consultation
              - img [ref=e209]
        - button "02 Bridal Glam Airbrush Makeup Starting ₹25,000 Ultra-smooth premium bridal airbrush makeup for camera-perfect results. Book Consultation" [ref=e212] [cursor=pointer]:
          - generic [ref=e215]:
            - generic [ref=e216]:
              - img [ref=e218]
              - generic [ref=e220]: "02"
            - paragraph [ref=e221]: Bridal Glam
            - heading "Airbrush Makeup" [level=3] [ref=e222]
            - paragraph [ref=e224]: Starting ₹25,000
            - paragraph [ref=e225]: Ultra-smooth premium bridal airbrush makeup for camera-perfect results.
            - generic [ref=e226]:
              - text: Book Consultation
              - img [ref=e227]
        - button "03 Signature Bride 5D Bridal Makeup Starting ₹45,000 Top-tier bridal transformation with luxury finishing and celebrity-style glam. Book Consultation" [ref=e230] [cursor=pointer]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - img [ref=e236]
              - generic [ref=e238]: "03"
            - paragraph [ref=e239]: Signature Bride
            - heading "5D Bridal Makeup" [level=3] [ref=e240]
            - paragraph [ref=e242]: Starting ₹45,000
            - paragraph [ref=e243]: Top-tier bridal transformation with luxury finishing and celebrity-style glam.
            - generic [ref=e244]:
              - text: Book Consultation
              - img [ref=e245]
        - button "04 Combo Package Bridal + Engagement Combo Starting ₹17,000 Complete bridal and engagement makeover package with coordinated styling. Book Consultation" [ref=e248] [cursor=pointer]:
          - generic [ref=e251]:
            - generic [ref=e252]:
              - img [ref=e254]
              - generic [ref=e256]: "04"
            - paragraph [ref=e257]: Combo Package
            - heading "Bridal + Engagement Combo" [level=3] [ref=e258]
            - paragraph [ref=e260]: Starting ₹17,000
            - paragraph [ref=e261]: Complete bridal and engagement makeover package with coordinated styling.
            - generic [ref=e262]:
              - text: Book Consultation
              - img [ref=e263]
        - button "05 Hair Ritual Hair Spa ₹600 - ₹2000 Deep nourishment and repair treatment for silky, healthy hair. Book Consultation" [ref=e266] [cursor=pointer]:
          - generic [ref=e269]:
            - generic [ref=e270]:
              - img [ref=e272]
              - generic [ref=e274]: "05"
            - paragraph [ref=e275]: Hair Ritual
            - heading "Hair Spa" [level=3] [ref=e276]
            - paragraph [ref=e278]: ₹600 - ₹2000
            - paragraph [ref=e279]: Deep nourishment and repair treatment for silky, healthy hair.
            - generic [ref=e280]:
              - text: Book Consultation
              - img [ref=e281]
        - button "06 Hair Ritual Keratin Treatment ₹4500 - ₹7500 Smoothening treatment for frizz-free, glossy, manageable hair. Book Consultation" [ref=e284] [cursor=pointer]:
          - generic [ref=e287]:
            - generic [ref=e288]:
              - img [ref=e290]
              - generic [ref=e292]: "06"
            - paragraph [ref=e293]: Hair Ritual
            - heading "Keratin Treatment" [level=3] [ref=e294]
            - paragraph [ref=e296]: ₹4500 - ₹7500
            - paragraph [ref=e297]: Smoothening treatment for frizz-free, glossy, manageable hair.
            - generic [ref=e298]:
              - text: Book Consultation
              - img [ref=e299]
        - button "07 Hair Ritual Botox Hair Treatment ₹4000 - ₹7000 Advanced hair repair treatment for shine, softness, and damage recovery. Book Consultation" [ref=e302] [cursor=pointer]:
          - generic [ref=e305]:
            - generic [ref=e306]:
              - img [ref=e308]
              - generic [ref=e310]: "07"
            - paragraph [ref=e311]: Hair Ritual
            - heading "Botox Hair Treatment" [level=3] [ref=e312]
            - paragraph [ref=e314]: ₹4000 - ₹7000
            - paragraph [ref=e315]: Advanced hair repair treatment for shine, softness, and damage recovery.
            - generic [ref=e316]:
              - text: Book Consultation
              - img [ref=e317]
        - button "08 Luxury Hair Hair Extension ₹15,000 - ₹30,000 Premium volume and length enhancement with natural luxury finish. Book Consultation" [ref=e320] [cursor=pointer]:
          - generic [ref=e323]:
            - generic [ref=e324]:
              - img [ref=e326]
              - generic [ref=e328]: "08"
            - paragraph [ref=e329]: Luxury Hair
            - heading "Hair Extension" [level=3] [ref=e330]
            - paragraph [ref=e332]: ₹15,000 - ₹30,000
            - paragraph [ref=e333]: Premium volume and length enhancement with natural luxury finish.
            - generic [ref=e334]:
              - text: Book Consultation
              - img [ref=e335]
        - button "09 Skin Care Hydra Facial Starting ₹3000 Deep hydration facial treatment for glowing, refreshed skin. Book Consultation" [ref=e338] [cursor=pointer]:
          - generic [ref=e341]:
            - generic [ref=e342]:
              - img [ref=e344]
              - generic [ref=e346]: "09"
            - paragraph [ref=e347]: Skin Care
            - heading "Hydra Facial" [level=3] [ref=e348]
            - paragraph [ref=e350]: Starting ₹3000
            - paragraph [ref=e351]: Deep hydration facial treatment for glowing, refreshed skin.
            - generic [ref=e352]:
              - text: Book Consultation
              - img [ref=e353]
        - button "10 Skin Care O3+ Bridal Glow Facial Starting ₹4200 Brightening bridal facial designed for instant glow and skin radiance. Book Consultation" [ref=e356] [cursor=pointer]:
          - generic [ref=e359]:
            - generic [ref=e360]:
              - img [ref=e362]
              - generic [ref=e364]: "10"
            - paragraph [ref=e365]: Skin Care
            - heading "O3+ Bridal Glow Facial" [level=3] [ref=e366]
            - paragraph [ref=e368]: Starting ₹4200
            - paragraph [ref=e369]: Brightening bridal facial designed for instant glow and skin radiance.
            - generic [ref=e370]:
              - text: Book Consultation
              - img [ref=e371]
    - generic [ref=e377]:
      - generic [ref=e378]:
        - text: Limited Time Offers
        - heading "Save more on your big day." [level=2] [ref=e380]
        - paragraph [ref=e381]: Elegant seasonal packages curated for bridal glam, events, and camera-ready beauty rituals.
      - generic [ref=e382]:
        - article [ref=e383]:
          - generic [ref=e385]:
            - generic [ref=e386]:
              - img [ref=e388]
              - generic [ref=e390]: SAVE ₹3,000
            - paragraph [ref=e391]: Complete bridal transformation package
            - heading "Bridal + Engagement Combo" [level=3] [ref=e392]
            - paragraph [ref=e394]: ₹17,000
            - list [ref=e395]:
              - listitem [ref=e396]:
                - img [ref=e398]
                - generic [ref=e400]: HD Bridal Makeup
              - listitem [ref=e401]:
                - img [ref=e403]
                - generic [ref=e405]: Engagement Makeup
              - listitem [ref=e406]:
                - img [ref=e408]
                - generic [ref=e410]: Hair Styling
              - listitem [ref=e411]:
                - img [ref=e413]
                - generic [ref=e415]: Complimentary Touch-up
            - button "Book Appointment" [ref=e416] [cursor=pointer]:
              - text: Book Appointment
              - img [ref=e417]
        - article [ref=e419]:
          - generic [ref=e421]:
            - generic [ref=e422]:
              - img [ref=e424]
              - generic [ref=e428]: LIMITED OFFER
            - paragraph [ref=e429]: Luxury bridal makeover offer
            - heading "30% OFF Bridal Makeup" [level=3] [ref=e430]
            - paragraph [ref=e432]: Flat 30% OFF
            - list [ref=e433]:
              - listitem [ref=e434]:
                - img [ref=e436]
                - generic [ref=e438]: HD Bridal Makeup
              - listitem [ref=e439]:
                - img [ref=e441]
                - generic [ref=e443]: Airbrush Makeup
              - listitem [ref=e444]:
                - img [ref=e446]
                - generic [ref=e448]: Premium Bridal Styling
              - listitem [ref=e449]:
                - img [ref=e451]
                - generic [ref=e453]: Skin Consultation
            - button "Book Appointment" [ref=e454] [cursor=pointer]:
              - text: Book Appointment
              - img [ref=e455]
        - article [ref=e457]:
          - generic [ref=e459]:
            - generic [ref=e460]:
              - img [ref=e462]
              - generic [ref=e464]: POPULAR
            - paragraph [ref=e465]: Smooth & glossy hair treatment
            - heading "Keratin + Hair Spa Combo" [level=3] [ref=e466]
            - paragraph [ref=e468]: Starting ₹5,999
            - list [ref=e469]:
              - listitem [ref=e470]:
                - img [ref=e472]
                - generic [ref=e474]: Keratin Treatment
              - listitem [ref=e475]:
                - img [ref=e477]
                - generic [ref=e479]: Deep Hair Spa
              - listitem [ref=e480]:
                - img [ref=e482]
                - generic [ref=e484]: Frizz Control
              - listitem [ref=e485]:
                - img [ref=e487]
                - generic [ref=e489]: Shine Finish
            - button "Book Appointment" [ref=e490] [cursor=pointer]:
              - text: Book Appointment
              - img [ref=e491]
    - generic [ref=e494]:
      - generic [ref=e495]:
        - generic [ref=e496]:
          - text: Instagram
          - heading "Moments of brilliance." [level=2] [ref=e498]
          - paragraph [ref=e499]: Latest bridal transformations and luxury beauty moments.
        - link "@ganga_beauty_parlour_" [ref=e500] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img [ref=e501]
          - text: "@ganga_beauty_parlour_"
          - img [ref=e504]
      - generic [ref=e507]:
        - link "Bridal Look · Wedding Day Latest Instagram Bridal Look · Wedding Day" [ref=e508] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img "Bridal Look · Wedding Day" [ref=e511]
          - generic [ref=e514]:
            - paragraph [ref=e515]: Latest Instagram
            - paragraph [ref=e516]: Bridal Look · Wedding Day
        - link "Bridal Look · Reception Latest Instagram Bridal Look · Reception" [ref=e517] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img "Bridal Look · Reception" [ref=e520]
          - generic [ref=e523]:
            - paragraph [ref=e524]: Latest Instagram
            - paragraph [ref=e525]: Bridal Look · Reception
        - link "Bridal Look · Sangeet Latest Instagram Bridal Look · Sangeet" [ref=e526] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img "Bridal Look · Sangeet" [ref=e529]
          - generic [ref=e532]:
            - paragraph [ref=e533]: Latest Instagram
            - paragraph [ref=e534]: Bridal Look · Sangeet
        - link "Nail Art · Engagement Latest Instagram Nail Art · Engagement" [ref=e535] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img "Nail Art · Engagement" [ref=e538]
          - generic [ref=e541]:
            - paragraph [ref=e542]: Latest Instagram
            - paragraph [ref=e543]: Nail Art · Engagement
      - link "Follow on Instagram" [ref=e545] [cursor=pointer]:
        - /url: https://instagram.com/ganga_beauty_parlour_
        - img [ref=e546]
        - text: Follow on Instagram
    - generic [ref=e550]:
      - generic [ref=e551]:
        - text: Testimonials
        - heading "Loved by clients across Sujangarh." [level=2] [ref=e553]
      - generic [ref=e554]:
        - generic [ref=e555]:
          - generic [ref=e556]:
            - img [ref=e557]
            - img [ref=e559]
            - img [ref=e561]
            - img [ref=e563]
            - img [ref=e565]
          - paragraph [ref=e567]: "4.8"
          - paragraph [ref=e568]: Google Rating
        - generic [ref=e569]:
          - paragraph [ref=e570]: 500+
          - paragraph [ref=e571]: Brides Styled
        - generic [ref=e572]:
          - paragraph [ref=e573]: 2,500+
          - paragraph [ref=e574]: Happy Clients
        - generic [ref=e575]:
          - paragraph [ref=e576]: 10+
          - paragraph [ref=e577]: Years of Craft
      - generic [ref=e578]:
        - article [ref=e579]:
          - img [ref=e580]
          - generic [ref=e583]:
            - generic [ref=e584]:
              - img [ref=e585]
              - img [ref=e587]
              - img [ref=e589]
              - img [ref=e591]
              - img [ref=e593]
            - generic [ref=e595]:
              - img [ref=e596]
              - text: Verified Bride
          - paragraph [ref=e599]: "\"Ganga ji made me feel like a queen on my wedding day. The makeup lasted through every function and looked flawless in photos.\""
          - generic [ref=e600]:
            - paragraph [ref=e601]: Pooja S.
            - paragraph [ref=e602]: Verified Bride · Sujangarh
        - article [ref=e603]:
          - img [ref=e604]
          - generic [ref=e607]:
            - generic [ref=e608]:
              - img [ref=e609]
              - img [ref=e611]
              - img [ref=e613]
              - img [ref=e615]
              - img [ref=e617]
            - generic [ref=e619]:
              - img [ref=e620]
              - text: Verified Bride
          - paragraph [ref=e623]: "\"Best beauty parlour in Sujangarh, hands down. Clean space, premium products, and so much warmth every visit.\""
          - generic [ref=e624]:
            - paragraph [ref=e625]: Anjali K.
            - paragraph [ref=e626]: Regular Client · Sujangarh
        - article [ref=e627]:
          - img [ref=e628]
          - generic [ref=e631]:
            - generic [ref=e632]:
              - img [ref=e633]
              - img [ref=e635]
              - img [ref=e637]
              - img [ref=e639]
              - img [ref=e641]
            - generic [ref=e643]:
              - img [ref=e644]
              - text: Verified Bride
          - paragraph [ref=e647]: "\"Everyone at my engagement asked who did my makeup. Got compliments for days! Highly recommend Ganga Beauty Parlour.\""
          - generic [ref=e648]:
            - paragraph [ref=e649]: Ritu M.
            - paragraph [ref=e650]: Verified Bride · Sujangarh
        - article [ref=e651]:
          - img [ref=e652]
          - generic [ref=e655]:
            - generic [ref=e656]:
              - img [ref=e657]
              - img [ref=e659]
              - img [ref=e661]
              - img [ref=e663]
              - img [ref=e665]
            - generic [ref=e667]:
              - img [ref=e668]
              - text: Verified Bride
          - paragraph [ref=e671]: "\"My hair has never looked this healthy. The keratin treatment was worth every rupee - totally going back.\""
          - generic [ref=e672]:
            - paragraph [ref=e673]: Sneha P.
            - paragraph [ref=e674]: Hair Spa Client · Sujangarh
    - generic [ref=e676]:
      - generic [ref=e677]:
        - text: Visit Us
        - heading "Step into the studio in Sujangarh." [level=2] [ref=e679]
      - generic [ref=e680]:
        - generic [ref=e682]:
          - generic [ref=e683]:
            - paragraph [ref=e684]: Branch Location
            - heading "Sujangarh Branch" [level=3] [ref=e685]
            - paragraph [ref=e686]: Same premium salon experience, styling and bridal services at our main Sujangarh studio.
            - paragraph [ref=e687]: Near SBI Bank, Sabji Mandi, Sumeru Complex, 1st Floor, Sujangarh
          - generic [ref=e688]:
            - link "Get directions to Ganga Beauty Parlour Sujangarh branch" [ref=e689] [cursor=pointer]:
              - /url: https://www.google.com/maps/search/?api=1&query=Sumeru+Complex+Sabji+Mandi+Sujangarh
              - text: Get Directions
            - generic [ref=e690]:
              - link "Call Ganga Beauty Parlour at +91 7733079941" [ref=e691] [cursor=pointer]:
                - /url: tel:+917733079941
                - text: +91 7733079941
              - link "Call Ganga Beauty Parlour at +91 7014221824" [ref=e692] [cursor=pointer]:
                - /url: tel:+917014221824
                - text: +91 7014221824
            - link "Chat with Ganga Beauty Parlour on WhatsApp" [ref=e693] [cursor=pointer]:
              - /url: https://wa.me/917733079941?text=Hi%20Ganga%20Beauty%20Parlour!%20I'd%20like%20a%20free%20consultation%20on%20WhatsApp.
              - text: WhatsApp
        - generic [ref=e695]:
          - generic [ref=e696]:
            - paragraph [ref=e697]: Branch Location
            - heading "Didwana Branch" [level=3] [ref=e698]
            - paragraph [ref=e699]: Enjoy the same Ganga Beauty Parlour luxury services at our Didwana location with full bridal, beauty and wellness support.
            - paragraph [ref=e700]: Mon - Sun · 10:00 AM - 8:00 PM
            - paragraph [ref=e701]: Bridal bookings on prior appointment
          - generic [ref=e702]:
            - link "Get directions to Ganga Beauty Parlour Didwana branch" [ref=e703] [cursor=pointer]:
              - /url: https://share.google/pkRjhpfULAO5wrehx
              - text: Get Directions
            - generic [ref=e704]:
              - link "Call Ganga Beauty Parlour at +91 7733079941" [ref=e705] [cursor=pointer]:
                - /url: tel:+917733079941
                - text: +91 7733079941
              - link "Call Ganga Beauty Parlour at +91 7014221824" [ref=e706] [cursor=pointer]:
                - /url: tel:+917014221824
                - text: +91 7014221824
            - link "Chat with Ganga Beauty Parlour on WhatsApp" [ref=e707] [cursor=pointer]:
              - /url: https://wa.me/917733079941?text=Hi%20Ganga%20Beauty%20Parlour!%20I'd%20like%20a%20free%20consultation%20on%20WhatsApp.
              - text: WhatsApp
    - generic [ref=e710]:
      - generic [ref=e711]:
        - text: Book Now
        - heading "Reserve your moment." [level=2] [ref=e713]
        - paragraph [ref=e714]: Tell us a little about what you'd like, and we'll confirm availability instantly on WhatsApp. Bridal & special occasion bookings are taken on prior appointment.
        - list [ref=e715]:
          - listitem [ref=e716]:
            - img [ref=e717]
            - text: Quick confirmation on WhatsApp
          - listitem [ref=e720]:
            - img [ref=e721]
            - text: Personal consultation before bridal services
          - listitem [ref=e724]:
            - img [ref=e725]
            - text: Flexible scheduling - Mon-Sun, 10 AM - 8 PM
      - generic [ref=e729]:
        - generic [ref=e730]:
          - generic [ref=e731]:
            - generic [ref=e732]: Full Name *
            - textbox "Full Name *" [ref=e733]:
              - /placeholder: Your name
          - generic [ref=e734]:
            - generic [ref=e735]: Phone *
            - textbox "Phone *" [ref=e736]:
              - /placeholder: 10-digit mobile
        - generic [ref=e737]:
          - generic [ref=e738]: Branch *
          - combobox "Branch *" [ref=e739]:
            - option "Select branch" [disabled] [selected]
            - option "Sujangarh"
            - option "Didwana"
            - option "Ladnun"
        - generic [ref=e740]:
          - generic [ref=e741]: Service *
          - combobox "Service *" [ref=e742]:
            - option "Select a service" [disabled] [selected]
            - option "Hair Styling"
            - option "Facial & Skincare"
            - option "Waxing & Threading"
            - option "Nail Artist Session"
            - option "Bridal Makeup"
            - option "Tattoo Studio"
            - option "HD Bridal Makeup"
            - option "Airbrush Makeup"
            - option "5D Bridal Makeup"
            - option "Bridal + Engagement Combo"
            - option "Hair Spa"
            - option "Keratin Treatment"
            - option "Botox Hair Treatment"
            - option "Hair Extension"
            - option "Hydra Facial"
            - option "O3+ Bridal Glow Facial"
            - option "Bridal Trial Makeup (Free)"
            - option "Other"
        - generic [ref=e743]:
          - generic [ref=e744]:
            - generic [ref=e745]: Preferred Date
            - textbox "Preferred Date" [ref=e746]
          - generic [ref=e747]:
            - generic [ref=e748]: Preferred Time
            - textbox "Preferred Time" [ref=e749]
        - generic [ref=e750]:
          - generic [ref=e751]: Note (optional)
          - textbox "Note (optional)" [ref=e752]:
            - /placeholder: Any details we should know
        - button "Request Bridal Consultation" [ref=e753] [cursor=pointer]:
          - img [ref=e754]
          - text: Request Bridal Consultation
        - paragraph [ref=e757]:
          - img [ref=e758]
          - text: Submitting opens WhatsApp with your details prefilled
  - contentinfo [ref=e760]:
    - generic [ref=e761]:
      - generic [ref=e763]:
        - generic [ref=e764]:
          - img "Ganga Beauty Parlour logo" [ref=e767]
          - paragraph [ref=e768]: Luxury bridal beauty, crafted with quiet precision.
          - paragraph [ref=e769]: A premium beauty atelier dedicated to confident, radiant bridal transformations in Sujangarh and Didwana.
        - generic [ref=e770]:
          - paragraph [ref=e771]: Visit & Connect
          - paragraph [ref=e772]:
            - img [ref=e773]
            - text: Near SBI Bank, Sabji Mandi, Sumeru Complex, 1st Floor, Sujangarh
          - generic [ref=e776]:
            - link "Call Ganga Beauty Parlour at +91 7733079941" [ref=e777] [cursor=pointer]:
              - /url: tel:+917733079941
              - img [ref=e779]
              - text: +91 7733079941
            - link "Call Ganga Beauty Parlour at +91 7014221824" [ref=e781] [cursor=pointer]:
              - /url: tel:+917014221824
              - img [ref=e783]
              - text: +91 7014221824
            - link "Chat with Ganga Beauty Parlour on WhatsApp" [ref=e785] [cursor=pointer]:
              - /url: https://wa.me/917733079941?text=Hi%20Ganga%20Beauty%20Parlour!
              - img [ref=e787]
              - text: WhatsApp
            - link "Open Ganga Beauty Parlour Instagram profile" [ref=e789] [cursor=pointer]:
              - /url: https://instagram.com/ganga_beauty_parlour_
              - img [ref=e791]
              - text: "@ganga_beauty_parlour_"
        - generic [ref=e794]:
          - paragraph [ref=e795]: Find Us
          - link "Open Ganga Beauty Parlour location on Google Maps" [ref=e796] [cursor=pointer]:
            - /url: https://www.google.com/maps/search/?api=1&query=Sumeru+Complex+Sabji+Mandi+Sujangarh
            - iframe [ref=e798]
          - link "Open in Google Maps" [ref=e799] [cursor=pointer]:
            - /url: https://www.google.com/maps/search/?api=1&query=Sumeru+Complex+Sabji+Mandi+Sujangarh
            - text: Open in Google Maps
            - img [ref=e800]
        - link "Instagram Bridal Look · Wedding Day Bridal Look · Reception Bridal Look · Sangeet Nail Art · Engagement Follow us @ganga_beauty_parlour_" [ref=e804] [cursor=pointer]:
          - /url: https://instagram.com/ganga_beauty_parlour_
          - paragraph [ref=e805]:
            - img [ref=e806]
            - text: Instagram
          - generic [ref=e809]:
            - img "Bridal Look · Wedding Day" [ref=e812]
            - img "Bridal Look · Reception" [ref=e815]
            - img "Bridal Look · Sangeet" [ref=e818]
            - img "Nail Art · Engagement" [ref=e821]
          - paragraph [ref=e822]: Follow us @ganga_beauty_parlour_
      - generic [ref=e823]:
        - paragraph [ref=e824]: © 2026 Ganga Beauty Parlour. All rights reserved.
        - paragraph [ref=e825]: Beauty Parlour in Sujangarh · Bridal Makeup · Hair · Skin
  - link "Chat on WhatsApp" [ref=e826] [cursor=pointer]:
    - /url: https://wa.me/917733079941?text=Hi%20Ganga%20Beauty%20Parlour!%20I'd%20like%20to%20know%20more.
    - img [ref=e827]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const viewports = [320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920];
  4  | 
  5  | test.describe("production audit", () => {
  6  |   for (const width of viewports) {
  7  |     test(`layout integrity at ${width}px`, async ({ page }) => {
  8  |       const consoleErrors = [];
  9  |       const failedRequests = [];
  10 | 
  11 |       page.on("console", (message) => {
  12 |         if (message.type() === "error") consoleErrors.push(message.text());
  13 |       });
  14 |       page.on("requestfailed", (request) => {
  15 |         if (!request.url().includes("/api/instagram-feed")) {
  16 |           failedRequests.push(`${request.method()} ${request.url()}`);
  17 |         }
  18 |       });
  19 | 
  20 |       await page.setViewportSize({ width, height: 900 });
  21 |       await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  22 | 
  23 |       const metrics = await page.evaluate(() => {
  24 |         const doc = document.documentElement;
  25 |         const images = Array.from(document.images).map((img) => ({
  26 |           src: img.currentSrc || img.src,
  27 |           alt: img.getAttribute("alt"),
  28 |           complete: img.complete,
  29 |           naturalWidth: img.naturalWidth,
  30 |           naturalHeight: img.naturalHeight,
  31 |           rect: img.getBoundingClientRect().toJSON(),
  32 |         }));
  33 |         const overflowing = Array.from(document.body.querySelectorAll("*"))
  34 |           .filter((el) => {
  35 |             const rect = el.getBoundingClientRect();
  36 |             return rect.width > 0 && (rect.left < -1 || rect.right > window.innerWidth + 1);
  37 |           })
  38 |           .slice(0, 12)
  39 |           .map((el) => ({
  40 |             tag: el.tagName,
  41 |             id: el.id,
  42 |             className: String(el.className).slice(0, 120),
  43 |             rect: el.getBoundingClientRect().toJSON(),
  44 |           }));
  45 | 
  46 |         return {
  47 |           innerWidth: window.innerWidth,
  48 |           scrollWidth: doc.scrollWidth,
  49 |           bodyScrollWidth: document.body.scrollWidth,
  50 |           heroHeight: document.querySelector("#top")?.getBoundingClientRect().height || 0,
  51 |           heroImageComplete: document.querySelector(".hero-main")?.complete || false,
  52 |           images,
  53 |           overflowing,
  54 |           activeTelLinks: Array.from(document.querySelectorAll('a[href^="tel:"]')).map((a) => a.href),
  55 |           branches: Array.from(document.querySelectorAll("#booking-branch option")).map((o) => o.value),
  56 |         };
  57 |       });
  58 | 
  59 |       expect(consoleErrors, `console errors at ${width}px`).toEqual([]);
  60 |       expect(failedRequests, `failed requests at ${width}px`).toEqual([]);
  61 |       expect(metrics.scrollWidth, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(width + 1);
  62 |       expect(metrics.bodyScrollWidth, `body horizontal overflow at ${width}px`).toBeLessThanOrEqual(width + 1);
> 63 |       expect(metrics.overflowing, `overflowing elements at ${width}px`).toEqual([]);
     |                                                                         ^ Error: overflowing elements at 1440px
  64 |       expect(metrics.heroHeight, `hero height at ${width}px`).toBeGreaterThan(600);
  65 |       expect(metrics.heroImageComplete, `hero image not complete at ${width}px`).toBe(true);
  66 |       expect(metrics.images.filter((img) => !img.complete || img.naturalWidth === 0), `broken images at ${width}px`).toEqual([]);
  67 |       expect(metrics.activeTelLinks).toContain("tel:+917733079941");
  68 |       expect(metrics.activeTelLinks).toContain("tel:+917014221824");
  69 |       expect(metrics.branches).toEqual(["", "Sujangarh", "Didwana", "Ladnun"]);
  70 |     });
  71 |   }
  72 | 
  73 |   test("booking form accepts Ladnun and exposes date/time controls", async ({ page }) => {
  74 |     await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  75 |     await page.locator("#booking").scrollIntoViewIfNeeded();
  76 |     await page.selectOption("#booking-branch", "Ladnun");
  77 |     await page.fill("#booking-name", "Production Audit");
  78 |     await page.fill("#booking-phone", "7733079941");
  79 |     await page.selectOption("#booking-service", "Hair Styling");
  80 |     await expect(page.locator("#booking-branch")).toHaveValue("Ladnun");
  81 |     await expect(page.locator("#booking-date")).toHaveAttribute("type", "date");
  82 |     await expect(page.locator("#booking-time")).toHaveAttribute("type", "time");
  83 |   });
  84 | });
  85 | 
```