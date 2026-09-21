# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: production-audit.spec.js >> production audit >> layout integrity at 360px
- Location: production-audit.spec.js:7:5

# Error details

```
Error: overflowing elements at 360px

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
+       "left": -7.1999969482421875,
+       "right": 367.2000274658203,
+       "top": 0,
+       "width": 374.4000244140625,
+       "x": -7.1999969482421875,
+       "y": 0,
+     },
+     "tag": "IMG",
+   },
+   Object {
+     "className": "hero-main absolute inset-0 w-full h-full object-cover object-[center_top] hero-media hero-main-visible",
+     "id": "",
+     "rect": Object {
+       "bottom": 902.3993835449219,
+       "height": 907.7933349609375,
+       "left": -1.5586700439453125,
+       "right": 361.5586395263672,
+       "top": -5.393951416015625,
+       "width": 363.1173095703125,
+       "x": -1.5586700439453125,
+       "y": -5.393951416015625,
+     },
+     "tag": "IMG",
+   },
+   Object {
+     "className": "absolute -right-20 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/8 blur-[110px]",
+     "id": "",
+     "rect": Object {
+       "bottom": 8505.28125,
+       "height": 224,
+       "left": 216,
+       "right": 440,
+       "top": 8281.28125,
+       "width": 224,
+       "x": 216,
+       "y": 8281.28125,
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
      - button "Toggle menu" [ref=e12] [cursor=pointer]:
        - img [ref=e13]
  - main [ref=e14]:
    - generic [ref=e15]:
      - generic [ref=e16]:
        - img [ref=e17]
        - img "Luxury bridal makeover by Ganga Beauty Parlour" [ref=e18]
      - generic:
        - img
      - generic [ref=e24]:
        - generic [ref=e25]:
          - img [ref=e26]
          - generic [ref=e28]: Premium Bridal Studio
        - heading "Your Beauty, Our Passion." [level=1] [ref=e29]:
          - text: Your Beauty,
          - text: Our Passion.
        - paragraph [ref=e30]: Luxe bridal makeup, hair styling and curated beauty rituals for your unforgettable celebration.
        - generic [ref=e31]:
          - generic [ref=e32]:
            - paragraph [ref=e33]: 4.8★
            - paragraph [ref=e34]: Google
          - generic [ref=e35]:
            - paragraph [ref=e36]: 500+
            - paragraph [ref=e37]: Brides
          - generic [ref=e38]:
            - paragraph [ref=e39]: 25+
            - paragraph [ref=e40]: Looks
        - button "Book Your Bridal Slot" [ref=e41] [cursor=pointer]:
          - text: Book Your Bridal Slot
          - img [ref=e42]
    - generic [ref=e45]:
      - generic [ref=e46]:
        - text: Why Choose Us
        - heading "A salon where craft, care and confidence come together." [level=2] [ref=e48]
      - generic [ref=e49]:
        - generic [ref=e50]:
          - img [ref=e52]
          - heading "10+ Years of Expertise" [level=3] [ref=e55]
          - paragraph [ref=e56]: A decade of refining bridal artistry, hair styling and skincare for Sujangarh's most discerning clients.
        - generic [ref=e57]:
          - img [ref=e59]
          - heading "2,500+ Happy Clients" [level=3] [ref=e64]
          - paragraph [ref=e65]: From first cuts to wedding-day glow-ups - we've been part of thousands of beautiful moments.
        - generic [ref=e66]:
          - img [ref=e68]
          - heading "Premium Products Only" [level=3] [ref=e71]
          - paragraph [ref=e72]: We use trusted international and luxury brands so every service feels uncompromising.
        - generic [ref=e73]:
          - img [ref=e75]
          - heading "Personal, Warm Service" [level=3] [ref=e77]
          - paragraph [ref=e78]: One-on-one consultations and looks tailored to your features, skin tone and personality.
    - generic [ref=e80]:
      - generic [ref=e81]:
        - generic [ref=e82]:
          - text: Our Services
          - heading "Crafted for every woman, every occasion." [level=2] [ref=e84]
        - paragraph [ref=e85]: From signature bridal looks to everyday glow - explore our full menu of beauty rituals.
      - generic [ref=e86]:
        - button "Hair Styling service at Ganga Beauty Parlour 01 / Service Hair Styling Cuts, blow-dry, curls and updos crafted to flatter your face. Reserve Session" [ref=e87] [cursor=pointer]:
          - img "Hair Styling service at Ganga Beauty Parlour" [ref=e90]
          - generic [ref=e93]:
            - paragraph [ref=e94]: 01 / Service
            - heading "Hair Styling" [level=3] [ref=e95]
            - paragraph [ref=e96]: Cuts, blow-dry, curls and updos crafted to flatter your face.
            - generic [ref=e97]:
              - text: Reserve Session
              - img [ref=e98]
        - button "Facial & Skincare service at Ganga Beauty Parlour 02 / Service Facial & Skincare Glow facials, clean-ups and clinical-grade treatments. Reserve Session" [ref=e101] [cursor=pointer]:
          - img "Facial & Skincare service at Ganga Beauty Parlour" [ref=e104]
          - generic [ref=e107]:
            - paragraph [ref=e108]: 02 / Service
            - heading "Facial & Skincare" [level=3] [ref=e109]
            - paragraph [ref=e110]: Glow facials, clean-ups and clinical-grade treatments.
            - generic [ref=e111]:
              - text: Reserve Session
              - img [ref=e112]
        - button "Waxing & Threading service at Ganga Beauty Parlour 03 / Service Waxing & Threading Smooth, gentle hair removal with premium imported waxes. Reserve Session" [ref=e115] [cursor=pointer]:
          - img "Waxing & Threading service at Ganga Beauty Parlour" [ref=e118]
          - generic [ref=e121]:
            - paragraph [ref=e122]: 03 / Service
            - heading "Waxing & Threading" [level=3] [ref=e123]
            - paragraph [ref=e124]: Smooth, gentle hair removal with premium imported waxes.
            - generic [ref=e125]:
              - text: Reserve Session
              - img [ref=e126]
        - button "Nail Artist Session service at Ganga Beauty Parlour 04 / Service Nail Artist Session Luxury nail extensions, gel polish, bridal nail art and premium manicure designs crafted with precision and elegance. Reserve Session" [ref=e129] [cursor=pointer]:
          - img "Nail Artist Session service at Ganga Beauty Parlour" [ref=e132]
          - generic [ref=e135]:
            - paragraph [ref=e136]: 04 / Service
            - heading "Nail Artist Session" [level=3] [ref=e137]
            - paragraph [ref=e138]: Luxury nail extensions, gel polish, bridal nail art and premium manicure designs crafted with precision and elegance.
            - generic [ref=e139]:
              - text: Reserve Session
              - img [ref=e140]
        - button "Bridal Makeup service at Ganga Beauty Parlour 05 / Service Bridal Makeup Signature bridal looks - engagement, haldi, mehendi and reception. Reserve Session" [ref=e143] [cursor=pointer]:
          - img "Bridal Makeup service at Ganga Beauty Parlour" [ref=e146]
          - generic [ref=e149]:
            - paragraph [ref=e150]: 05 / Service
            - heading "Bridal Makeup" [level=3] [ref=e151]
            - paragraph [ref=e152]: Signature bridal looks - engagement, haldi, mehendi and reception.
            - generic [ref=e153]:
              - text: Reserve Session
              - img [ref=e154]
        - button "Tattoo Studio service at Ganga Beauty Parlour 06 / Service Tattoo Studio Custom tattoos, fine line art, portrait tattoos and professional body ink designed with precision and hygiene. Reserve Session" [ref=e157] [cursor=pointer]:
          - img "Tattoo Studio service at Ganga Beauty Parlour" [ref=e160]
          - generic [ref=e163]:
            - paragraph [ref=e164]: 06 / Service
            - heading "Tattoo Studio" [level=3] [ref=e165]
            - paragraph [ref=e166]: Custom tattoos, fine line art, portrait tattoos and professional body ink designed with precision and hygiene.
            - generic [ref=e167]:
              - text: Reserve Session
              - img [ref=e168]
      - button "Book Consultation" [ref=e172] [cursor=pointer]
    - generic [ref=e176]:
      - generic [ref=e177]:
        - text: Luxury Ritual Menu
        - heading "Premium Bridal Services" [level=2] [ref=e179]
        - paragraph [ref=e180]: Luxury beauty, bridal glam, skin care, and hair artistry crafted for unforgettable celebrations.
      - generic [ref=e181]:
        - button "01 Bridal Glam HD Bridal Makeup Starting ₹15,000 Long-lasting HD bridal glam with flawless skin finish and luxury styling. Book Consultation" [ref=e182] [cursor=pointer]:
          - generic [ref=e185]:
            - generic [ref=e186]:
              - img [ref=e188]
              - generic [ref=e190]: "01"
            - paragraph [ref=e191]: Bridal Glam
            - heading "HD Bridal Makeup" [level=3] [ref=e192]
            - paragraph [ref=e194]: Starting ₹15,000
            - paragraph [ref=e195]: Long-lasting HD bridal glam with flawless skin finish and luxury styling.
            - generic [ref=e196]:
              - text: Book Consultation
              - img [ref=e197]
        - button "02 Bridal Glam Airbrush Makeup Starting ₹25,000 Ultra-smooth premium bridal airbrush makeup for camera-perfect results. Book Consultation" [ref=e200] [cursor=pointer]:
          - generic [ref=e203]:
            - generic [ref=e204]:
              - img [ref=e206]
              - generic [ref=e208]: "02"
            - paragraph [ref=e209]: Bridal Glam
            - heading "Airbrush Makeup" [level=3] [ref=e210]
            - paragraph [ref=e212]: Starting ₹25,000
            - paragraph [ref=e213]: Ultra-smooth premium bridal airbrush makeup for camera-perfect results.
            - generic [ref=e214]:
              - text: Book Consultation
              - img [ref=e215]
        - button "03 Signature Bride 5D Bridal Makeup Starting ₹45,000 Top-tier bridal transformation with luxury finishing and celebrity-style glam. Book Consultation" [ref=e218] [cursor=pointer]:
          - generic [ref=e221]:
            - generic [ref=e222]:
              - img [ref=e224]
              - generic [ref=e226]: "03"
            - paragraph [ref=e227]: Signature Bride
            - heading "5D Bridal Makeup" [level=3] [ref=e228]
            - paragraph [ref=e230]: Starting ₹45,000
            - paragraph [ref=e231]: Top-tier bridal transformation with luxury finishing and celebrity-style glam.
            - generic [ref=e232]:
              - text: Book Consultation
              - img [ref=e233]
        - button "04 Combo Package Bridal + Engagement Combo Starting ₹17,000 Complete bridal and engagement makeover package with coordinated styling. Book Consultation" [ref=e236] [cursor=pointer]:
          - generic [ref=e239]:
            - generic [ref=e240]:
              - img [ref=e242]
              - generic [ref=e244]: "04"
            - paragraph [ref=e245]: Combo Package
            - heading "Bridal + Engagement Combo" [level=3] [ref=e246]
            - paragraph [ref=e248]: Starting ₹17,000
            - paragraph [ref=e249]: Complete bridal and engagement makeover package with coordinated styling.
            - generic [ref=e250]:
              - text: Book Consultation
              - img [ref=e251]
        - button "05 Hair Ritual Hair Spa ₹600 - ₹2000 Deep nourishment and repair treatment for silky, healthy hair. Book Consultation" [ref=e254] [cursor=pointer]:
          - generic [ref=e257]:
            - generic [ref=e258]:
              - img [ref=e260]
              - generic [ref=e262]: "05"
            - paragraph [ref=e263]: Hair Ritual
            - heading "Hair Spa" [level=3] [ref=e264]
            - paragraph [ref=e266]: ₹600 - ₹2000
            - paragraph [ref=e267]: Deep nourishment and repair treatment for silky, healthy hair.
            - generic [ref=e268]:
              - text: Book Consultation
              - img [ref=e269]
        - button "06 Hair Ritual Keratin Treatment ₹4500 - ₹7500 Smoothening treatment for frizz-free, glossy, manageable hair. Book Consultation" [ref=e272] [cursor=pointer]:
          - generic [ref=e275]:
            - generic [ref=e276]:
              - img [ref=e278]
              - generic [ref=e280]: "06"
            - paragraph [ref=e281]: Hair Ritual
            - heading "Keratin Treatment" [level=3] [ref=e282]
            - paragraph [ref=e284]: ₹4500 - ₹7500
            - paragraph [ref=e285]: Smoothening treatment for frizz-free, glossy, manageable hair.
            - generic [ref=e286]:
              - text: Book Consultation
              - img [ref=e287]
        - button "07 Hair Ritual Botox Hair Treatment ₹4000 - ₹7000 Advanced hair repair treatment for shine, softness, and damage recovery. Book Consultation" [ref=e290] [cursor=pointer]:
          - generic [ref=e293]:
            - generic [ref=e294]:
              - img [ref=e296]
              - generic [ref=e298]: "07"
            - paragraph [ref=e299]: Hair Ritual
            - heading "Botox Hair Treatment" [level=3] [ref=e300]
            - paragraph [ref=e302]: ₹4000 - ₹7000
            - paragraph [ref=e303]: Advanced hair repair treatment for shine, softness, and damage recovery.
            - generic [ref=e304]:
              - text: Book Consultation
              - img [ref=e305]
        - button "08 Luxury Hair Hair Extension ₹15,000 - ₹30,000 Premium volume and length enhancement with natural luxury finish. Book Consultation" [ref=e308] [cursor=pointer]:
          - generic [ref=e311]:
            - generic [ref=e312]:
              - img [ref=e314]
              - generic [ref=e316]: "08"
            - paragraph [ref=e317]: Luxury Hair
            - heading "Hair Extension" [level=3] [ref=e318]
            - paragraph [ref=e320]: ₹15,000 - ₹30,000
            - paragraph [ref=e321]: Premium volume and length enhancement with natural luxury finish.
            - generic [ref=e322]:
              - text: Book Consultation
              - img [ref=e323]
        - button "09 Skin Care Hydra Facial Starting ₹3000 Deep hydration facial treatment for glowing, refreshed skin. Book Consultation" [ref=e326] [cursor=pointer]:
          - generic [ref=e329]:
            - generic [ref=e330]:
              - img [ref=e332]
              - generic [ref=e334]: "09"
            - paragraph [ref=e335]: Skin Care
            - heading "Hydra Facial" [level=3] [ref=e336]
            - paragraph [ref=e338]: Starting ₹3000
            - paragraph [ref=e339]: Deep hydration facial treatment for glowing, refreshed skin.
            - generic [ref=e340]:
              - text: Book Consultation
              - img [ref=e341]
        - button "10 Skin Care O3+ Bridal Glow Facial Starting ₹4200 Brightening bridal facial designed for instant glow and skin radiance. Book Consultation" [ref=e344] [cursor=pointer]:
          - generic [ref=e347]:
            - generic [ref=e348]:
              - img [ref=e350]
              - generic [ref=e352]: "10"
            - paragraph [ref=e353]: Skin Care
            - heading "O3+ Bridal Glow Facial" [level=3] [ref=e354]
            - paragraph [ref=e356]: Starting ₹4200
            - paragraph [ref=e357]: Brightening bridal facial designed for instant glow and skin radiance.
            - generic [ref=e358]:
              - text: Book Consultation
              - img [ref=e359]
    - generic [ref=e365]:
      - generic [ref=e366]:
        - text: Limited Time Offers
        - heading "Save more on your big day." [level=2] [ref=e368]
        - paragraph [ref=e369]: Elegant seasonal packages curated for bridal glam, events, and camera-ready beauty rituals.
      - generic [ref=e370]:
        - article [ref=e371]:
          - generic [ref=e373]:
            - generic [ref=e374]:
              - img [ref=e376]
              - generic [ref=e378]: SAVE ₹3,000
            - paragraph [ref=e379]: Complete bridal transformation package
            - heading "Bridal + Engagement Combo" [level=3] [ref=e380]
            - paragraph [ref=e382]: ₹17,000
            - list [ref=e383]:
              - listitem [ref=e384]:
                - img [ref=e386]
                - generic [ref=e388]: HD Bridal Makeup
              - listitem [ref=e389]:
                - img [ref=e391]
                - generic [ref=e393]: Engagement Makeup
              - listitem [ref=e394]:
                - img [ref=e396]
                - generic [ref=e398]: Hair Styling
              - listitem [ref=e399]:
                - img [ref=e401]
                - generic [ref=e403]: Complimentary Touch-up
            - button "Book Appointment" [ref=e404] [cursor=pointer]:
              - text: Book Appointment
              - img [ref=e405]
        - article [ref=e407]:
          - generic [ref=e409]:
            - generic [ref=e410]:
              - img [ref=e412]
              - generic [ref=e416]: LIMITED OFFER
            - paragraph [ref=e417]: Luxury bridal makeover offer
            - heading "30% OFF Bridal Makeup" [level=3] [ref=e418]
            - paragraph [ref=e420]: Flat 30% OFF
            - list [ref=e421]:
              - listitem [ref=e422]:
                - img [ref=e424]
                - generic [ref=e426]: HD Bridal Makeup
              - listitem [ref=e427]:
                - img [ref=e429]
                - generic [ref=e431]: Airbrush Makeup
              - listitem [ref=e432]:
                - img [ref=e434]
                - generic [ref=e436]: Premium Bridal Styling
              - listitem [ref=e437]:
                - img [ref=e439]
                - generic [ref=e441]: Skin Consultation
            - button "Book Appointment" [ref=e442] [cursor=pointer]:
              - text: Book Appointment
              - img [ref=e443]
        - article [ref=e445]:
          - generic [ref=e447]:
            - generic [ref=e448]:
              - img [ref=e450]
              - generic [ref=e452]: POPULAR
            - paragraph [ref=e453]: Smooth & glossy hair treatment
            - heading "Keratin + Hair Spa Combo" [level=3] [ref=e454]
            - paragraph [ref=e456]: Starting ₹5,999
            - list [ref=e457]:
              - listitem [ref=e458]:
                - img [ref=e460]
                - generic [ref=e462]: Keratin Treatment
              - listitem [ref=e463]:
                - img [ref=e465]
                - generic [ref=e467]: Deep Hair Spa
              - listitem [ref=e468]:
                - img [ref=e470]
                - generic [ref=e472]: Frizz Control
              - listitem [ref=e473]:
                - img [ref=e475]
                - generic [ref=e477]: Shine Finish
            - button "Book Appointment" [ref=e478] [cursor=pointer]:
              - text: Book Appointment
              - img [ref=e479]
    - generic [ref=e482]:
      - generic [ref=e483]:
        - generic [ref=e484]:
          - text: Instagram
          - heading "Moments of brilliance." [level=2] [ref=e486]
          - paragraph [ref=e487]: Latest bridal transformations and luxury beauty moments.
        - link "@ganga_beauty_parlour_" [ref=e488] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img [ref=e489]
          - text: "@ganga_beauty_parlour_"
          - img [ref=e492]
      - generic [ref=e495]:
        - link "Bridal Look · Wedding Day Latest Instagram Bridal Look · Wedding Day" [ref=e496] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img "Bridal Look · Wedding Day" [ref=e499]
          - generic [ref=e502]:
            - paragraph [ref=e503]: Latest Instagram
            - paragraph [ref=e504]: Bridal Look · Wedding Day
        - link "Bridal Look · Reception Latest Instagram Bridal Look · Reception" [ref=e505] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img "Bridal Look · Reception" [ref=e508]
          - generic [ref=e511]:
            - paragraph [ref=e512]: Latest Instagram
            - paragraph [ref=e513]: Bridal Look · Reception
        - link "Bridal Look · Sangeet Latest Instagram Bridal Look · Sangeet" [ref=e514] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img "Bridal Look · Sangeet" [ref=e517]
          - generic [ref=e520]:
            - paragraph [ref=e521]: Latest Instagram
            - paragraph [ref=e522]: Bridal Look · Sangeet
        - link "Nail Art · Engagement Latest Instagram Nail Art · Engagement" [ref=e523] [cursor=pointer]:
          - /url: https://www.instagram.com/ganga_beauty_parlour_/
          - img "Nail Art · Engagement" [ref=e526]
          - generic [ref=e529]:
            - paragraph [ref=e530]: Latest Instagram
            - paragraph [ref=e531]: Nail Art · Engagement
      - link "Follow on Instagram" [ref=e533] [cursor=pointer]:
        - /url: https://instagram.com/ganga_beauty_parlour_
        - img [ref=e534]
        - text: Follow on Instagram
    - generic [ref=e538]:
      - generic [ref=e539]:
        - text: Testimonials
        - heading "Loved by clients across Sujangarh." [level=2] [ref=e541]
      - generic [ref=e542]:
        - generic [ref=e543]:
          - generic [ref=e544]:
            - img [ref=e545]
            - img [ref=e547]
            - img [ref=e549]
            - img [ref=e551]
            - img [ref=e553]
          - paragraph [ref=e555]: "4.8"
          - paragraph [ref=e556]: Google Rating
        - generic [ref=e557]:
          - paragraph [ref=e558]: 500+
          - paragraph [ref=e559]: Brides Styled
        - generic [ref=e560]:
          - paragraph [ref=e561]: 2,500+
          - paragraph [ref=e562]: Happy Clients
        - generic [ref=e563]:
          - paragraph [ref=e564]: 10+
          - paragraph [ref=e565]: Years of Craft
      - generic [ref=e566]:
        - article [ref=e567]:
          - img [ref=e568]
          - generic [ref=e571]:
            - generic [ref=e572]:
              - img [ref=e573]
              - img [ref=e575]
              - img [ref=e577]
              - img [ref=e579]
              - img [ref=e581]
            - generic [ref=e583]:
              - img [ref=e584]
              - text: Verified Bride
          - paragraph [ref=e587]: "\"Ganga ji made me feel like a queen on my wedding day. The makeup lasted through every function and looked flawless in photos.\""
          - generic [ref=e588]:
            - paragraph [ref=e589]: Pooja S.
            - paragraph [ref=e590]: Verified Bride · Sujangarh
        - article [ref=e591]:
          - img [ref=e592]
          - generic [ref=e595]:
            - generic [ref=e596]:
              - img [ref=e597]
              - img [ref=e599]
              - img [ref=e601]
              - img [ref=e603]
              - img [ref=e605]
            - generic [ref=e607]:
              - img [ref=e608]
              - text: Verified Bride
          - paragraph [ref=e611]: "\"Best beauty parlour in Sujangarh, hands down. Clean space, premium products, and so much warmth every visit.\""
          - generic [ref=e612]:
            - paragraph [ref=e613]: Anjali K.
            - paragraph [ref=e614]: Regular Client · Sujangarh
        - article [ref=e615]:
          - img [ref=e616]
          - generic [ref=e619]:
            - generic [ref=e620]:
              - img [ref=e621]
              - img [ref=e623]
              - img [ref=e625]
              - img [ref=e627]
              - img [ref=e629]
            - generic [ref=e631]:
              - img [ref=e632]
              - text: Verified Bride
          - paragraph [ref=e635]: "\"Everyone at my engagement asked who did my makeup. Got compliments for days! Highly recommend Ganga Beauty Parlour.\""
          - generic [ref=e636]:
            - paragraph [ref=e637]: Ritu M.
            - paragraph [ref=e638]: Verified Bride · Sujangarh
        - article [ref=e639]:
          - img [ref=e640]
          - generic [ref=e643]:
            - generic [ref=e644]:
              - img [ref=e645]
              - img [ref=e647]
              - img [ref=e649]
              - img [ref=e651]
              - img [ref=e653]
            - generic [ref=e655]:
              - img [ref=e656]
              - text: Verified Bride
          - paragraph [ref=e659]: "\"My hair has never looked this healthy. The keratin treatment was worth every rupee - totally going back.\""
          - generic [ref=e660]:
            - paragraph [ref=e661]: Sneha P.
            - paragraph [ref=e662]: Hair Spa Client · Sujangarh
    - generic [ref=e664]:
      - generic [ref=e665]:
        - text: Visit Us
        - heading "Step into the studio in Sujangarh." [level=2] [ref=e667]
      - generic [ref=e668]:
        - generic [ref=e670]:
          - generic [ref=e671]:
            - paragraph [ref=e672]: Branch Location
            - heading "Sujangarh Branch" [level=3] [ref=e673]
            - paragraph [ref=e674]: Same premium salon experience, styling and bridal services at our main Sujangarh studio.
            - paragraph [ref=e675]: Near SBI Bank, Sabji Mandi, Sumeru Complex, 1st Floor, Sujangarh
          - generic [ref=e676]:
            - link "Get directions to Ganga Beauty Parlour Sujangarh branch" [ref=e677] [cursor=pointer]:
              - /url: https://www.google.com/maps/search/?api=1&query=Sumeru+Complex+Sabji+Mandi+Sujangarh
              - text: Get Directions
            - generic [ref=e678]:
              - link "Call Ganga Beauty Parlour at +91 7733079941" [ref=e679] [cursor=pointer]:
                - /url: tel:+917733079941
                - text: +91 7733079941
              - link "Call Ganga Beauty Parlour at +91 7014221824" [ref=e680] [cursor=pointer]:
                - /url: tel:+917014221824
                - text: +91 7014221824
            - link "Chat with Ganga Beauty Parlour on WhatsApp" [ref=e681] [cursor=pointer]:
              - /url: https://wa.me/917733079941?text=Hi%20Ganga%20Beauty%20Parlour!%20I'd%20like%20a%20free%20consultation%20on%20WhatsApp.
              - text: WhatsApp
        - generic [ref=e683]:
          - generic [ref=e684]:
            - paragraph [ref=e685]: Branch Location
            - heading "Didwana Branch" [level=3] [ref=e686]
            - paragraph [ref=e687]: Enjoy the same Ganga Beauty Parlour luxury services at our Didwana location with full bridal, beauty and wellness support.
            - paragraph [ref=e688]: Mon - Sun · 10:00 AM - 8:00 PM
            - paragraph [ref=e689]: Bridal bookings on prior appointment
          - generic [ref=e690]:
            - link "Get directions to Ganga Beauty Parlour Didwana branch" [ref=e691] [cursor=pointer]:
              - /url: https://share.google/pkRjhpfULAO5wrehx
              - text: Get Directions
            - generic [ref=e692]:
              - link "Call Ganga Beauty Parlour at +91 7733079941" [ref=e693] [cursor=pointer]:
                - /url: tel:+917733079941
                - text: +91 7733079941
              - link "Call Ganga Beauty Parlour at +91 7014221824" [ref=e694] [cursor=pointer]:
                - /url: tel:+917014221824
                - text: +91 7014221824
            - link "Chat with Ganga Beauty Parlour on WhatsApp" [ref=e695] [cursor=pointer]:
              - /url: https://wa.me/917733079941?text=Hi%20Ganga%20Beauty%20Parlour!%20I'd%20like%20a%20free%20consultation%20on%20WhatsApp.
              - text: WhatsApp
    - generic [ref=e698]:
      - generic [ref=e699]:
        - text: Book Now
        - heading "Reserve your moment." [level=2] [ref=e701]
        - paragraph [ref=e702]: Tell us a little about what you'd like, and we'll confirm availability instantly on WhatsApp. Bridal & special occasion bookings are taken on prior appointment.
        - list [ref=e703]:
          - listitem [ref=e704]:
            - img [ref=e705]
            - text: Quick confirmation on WhatsApp
          - listitem [ref=e708]:
            - img [ref=e709]
            - text: Personal consultation before bridal services
          - listitem [ref=e712]:
            - img [ref=e713]
            - text: Flexible scheduling - Mon-Sun, 10 AM - 8 PM
      - generic [ref=e717]:
        - generic [ref=e718]:
          - generic [ref=e719]:
            - generic [ref=e720]: Full Name *
            - textbox "Full Name *" [ref=e721]:
              - /placeholder: Your name
          - generic [ref=e722]:
            - generic [ref=e723]: Phone *
            - textbox "Phone *" [ref=e724]:
              - /placeholder: 10-digit mobile
        - generic [ref=e725]:
          - generic [ref=e726]: Branch *
          - combobox "Branch *" [ref=e727]:
            - option "Select branch" [disabled] [selected]
            - option "Sujangarh"
            - option "Didwana"
            - option "Ladnun"
        - generic [ref=e728]:
          - generic [ref=e729]: Service *
          - combobox "Service *" [ref=e730]:
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
        - generic [ref=e731]:
          - generic [ref=e732]:
            - generic [ref=e733]: Preferred Date
            - textbox "Preferred Date" [ref=e734]
          - generic [ref=e735]:
            - generic [ref=e736]: Preferred Time
            - textbox "Preferred Time" [ref=e737]
        - generic [ref=e738]:
          - generic [ref=e739]: Note (optional)
          - textbox "Note (optional)" [ref=e740]:
            - /placeholder: Any details we should know
        - button "Request Bridal Consultation" [ref=e741] [cursor=pointer]:
          - img [ref=e742]
          - text: Request Bridal Consultation
        - paragraph [ref=e745]:
          - img [ref=e746]
          - text: Submitting opens WhatsApp with your details prefilled
  - contentinfo [ref=e748]:
    - generic [ref=e749]:
      - generic [ref=e751]:
        - generic [ref=e752]:
          - img "Ganga Beauty Parlour logo" [ref=e755]
          - paragraph [ref=e756]: Luxury bridal beauty, crafted with quiet precision.
          - paragraph [ref=e757]: A premium beauty atelier dedicated to confident, radiant bridal transformations in Sujangarh and Didwana.
        - generic [ref=e758]:
          - paragraph [ref=e759]: Visit & Connect
          - paragraph [ref=e760]:
            - img [ref=e761]
            - text: Near SBI Bank, Sabji Mandi, Sumeru Complex, 1st Floor, Sujangarh
          - generic [ref=e764]:
            - link "Call Ganga Beauty Parlour at +91 7733079941" [ref=e765] [cursor=pointer]:
              - /url: tel:+917733079941
              - img [ref=e767]
              - text: +91 7733079941
            - link "Call Ganga Beauty Parlour at +91 7014221824" [ref=e769] [cursor=pointer]:
              - /url: tel:+917014221824
              - img [ref=e771]
              - text: +91 7014221824
            - link "Chat with Ganga Beauty Parlour on WhatsApp" [ref=e773] [cursor=pointer]:
              - /url: https://wa.me/917733079941?text=Hi%20Ganga%20Beauty%20Parlour!
              - img [ref=e775]
              - text: WhatsApp
            - link "Open Ganga Beauty Parlour Instagram profile" [ref=e777] [cursor=pointer]:
              - /url: https://instagram.com/ganga_beauty_parlour_
              - img [ref=e779]
              - text: "@ganga_beauty_parlour_"
        - generic [ref=e782]:
          - paragraph [ref=e783]: Find Us
          - link "Open Ganga Beauty Parlour location on Google Maps" [ref=e784] [cursor=pointer]:
            - /url: https://www.google.com/maps/search/?api=1&query=Sumeru+Complex+Sabji+Mandi+Sujangarh
            - iframe [ref=e786]
          - link "Open in Google Maps" [ref=e787] [cursor=pointer]:
            - /url: https://www.google.com/maps/search/?api=1&query=Sumeru+Complex+Sabji+Mandi+Sujangarh
            - text: Open in Google Maps
            - img [ref=e788]
        - link "Instagram Bridal Look · Wedding Day Bridal Look · Reception Bridal Look · Sangeet Nail Art · Engagement Follow us @ganga_beauty_parlour_" [ref=e792] [cursor=pointer]:
          - /url: https://instagram.com/ganga_beauty_parlour_
          - paragraph [ref=e793]:
            - img [ref=e794]
            - text: Instagram
          - generic [ref=e797]:
            - img "Bridal Look · Wedding Day" [ref=e800]
            - img "Bridal Look · Reception" [ref=e803]
            - img "Bridal Look · Sangeet" [ref=e806]
            - img "Nail Art · Engagement" [ref=e809]
          - paragraph [ref=e810]: Follow us @ganga_beauty_parlour_
      - generic [ref=e811]:
        - paragraph [ref=e812]: © 2026 Ganga Beauty Parlour. All rights reserved.
        - paragraph [ref=e813]: Beauty Parlour in Sujangarh · Bridal Makeup · Hair · Skin
  - link "Chat on WhatsApp" [ref=e814] [cursor=pointer]:
    - /url: https://wa.me/917733079941?text=Hi%20Ganga%20Beauty%20Parlour!%20I'd%20like%20to%20know%20more.
    - img [ref=e815]
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
     |                                                                         ^ Error: overflowing elements at 360px
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