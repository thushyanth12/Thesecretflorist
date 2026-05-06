const products = [
    {
        id: 1,
        name: "The First step",
        price: 1800,
        image: "assets/child.webp", // Path relative to public folder
        description: "A bouquet for your baby's birthday.",
        category: ["birthday","polaroids-bouquet"]
        
    },
    {
        id: 2,
        name: "Blush Harmony Box",
        price: 3000,
        image: "assets/one.webp",
        description: "Soft pastel blooms and sweet treats arranged for elegant celebrations.",
        category: "customized"
    },
    {
        id: 3,
        name: "Midnight Bloom Luxe",
        price: 1500,
        image: "assets/three.webp",
        description: "Bold florals with premium accents, designed for a modern and sophisticated gift.",
        category: ["polaroids-bouquet","wedding"]
    },
    {
        id: 4,
        name: "Healer's Honor Bouquet",
        price: 2300,
        image: "assets/four.webp",
        description: "A thoughtful floral arrangement crafted especially to appreciate and celebrate doctors.",
        category: "birthday"
    },

    {
        id: 5,
        name: "Ivory Spring Vase",
        price: 1800,
        image: "assets/6.webp",
        description: "A refreshing mix of white blooms and buds arranged for natural elegance.",
        category: "customized"
    },
    {
        id: 6,
        name: "Scarlet Signature Wrap",
        price: 2800,
        image: "assets/7.webp",
        description: "Hand-wrapped red roses crafted to mark unforgettable moments of love.",
        category:"wedding"

    },
    {
        id: 7,
        name: "Heart of a three hundred roses",
        price: 80000,
        image: "assets/8.webp",
        description: "A grand heart-shaped arrangement of red roses, made to express deep devotion.",
        category: "luxury"
    },
    {
        id: 8,
        name: "Hot Wheels Fire",
        price: 2800,
        image: "assets/nine.webp",
        description: "A bold Hot Wheels surprise wrapped with vibrant blooms and treats.",
        category: "hot-wheels"
    },
  
    {
        id: 9,
        name: "Serene Blue Bliss",
        price: 700,
        image: "assets/eleven.webp",
        description: "Elegant blue florals paired with balloons for a calm, graceful surprise.",
        category: ["customized", "budget-friendly"]
    },
    {
        id: 10,
        name: "Blush celebration box",
        price: 700,
        image: "assets/twelve.webp",
        description: "Soft pink florals and balloons crafted for joyful, heartfelt moments.",
        category: ["customized", "budget-friendly"]
    },
    
    {
        id: 11,
        name: "Ballooned Blossom Surprise",
        price: 1400,
        image: "assets/thirteen.webp",
        description: "A cheerful floral box accented with balloons, perfect for joyful celebrations.",
        category: "customized"
    },
    {
        id: 12,
        name: "Azure Romantic Crate",
        price: 1500,
        image: "assets/fourteen.webp",
        description: "Elegant blue and white blooms styled with gourmet treats in a rustic box.",
        category: ["birthday","chocolate-bouquet"]
    },
    {
        id: 13,
        name: "Heirloom Petal Mandala",
        price: 700,
        image: "assets/fifteen.webp",
        description: "An intricate circular floral design crafted as a timeless showpiece.",
        category: ["customized", "budget-friendly"]
    },
    {
        id: 14,
        name: "Money Bouquet",
        price: 3500,
        image: "assets/sixteen.webp",
        description: "A bouquet full of Rupees.",
        category: ["customized"]
    },

    {
        id: 15,
        name: "Forever us Boquet ",
        price: 3800,
        image: "assets/forever.webp",
        description: "Romantic red roses blended with photos, chocolates, and a soft keepsake for lasting memories.",
        category: ["polaroids-bouquet","wedding"]
    },
    {
        id: 16,
        name: "Memories in bloom",
        price: 1000,
        image: "assets/nineteen.webp",
        description: "A personalized photo bouquet woven with fresh florals to celebrate cherished moments.",
        category: ["polaroids-bouquet", "budget-friendly", "customized"]
    },
   
    {
        id: 17,
        name: "Golden Heart Indulgence",
        price: 6000,
        image: "assets/21.webp",
        description: "A luxurious heart-shaped arrangement of red roses and Ferrero Rocher chocolates.",
        category: ["chocolate-bouquet"]
    },
    {
        id: 18,
        name: "Velvet Rose Noir",
        price: 2500,
        image: "assets/22.webp",
        description: "Classic red roses wrapped in elegant black for a bold, timeless expression of love.",
        category: ["birthday","wedding"]
    },
    {
        id: 19,
        name: "Purple Sweet Symphony",
        price: 2500,
        image: "assets/23.webp",
        description: "Soft florals paired with Cadbury Dairy Milk chocolates for a sweet and charming surprise.",
        category: "chocolate-bouquet"       
    },
    {
        id: 20,
        name: "Kinder Joy Celebration Wrap",
        price: 1200,
        image: "assets/24.webp",
        description: "A fun and delightful bouquet filled with Kinder Joy treats, perfect for cheerful gifting.",
        category: "chocolate-bouquet"
    },
    {
        id: 21,
        name: "Blush Tulip Whisper",
        price: 1699,
        image: "assets/25.webp",
        description: "Soft pink and white tulips wrapped in elegance for a gentle, graceful gesture.",
        category: ["birthday" ,"wedding"],
        prebook: true
    },
    {
        id: 22,
        name: "Cuddle Carnival Bouquet",
        price: 3800,
        image: "assets/26.webp",
        description: "An adorable arrangement of plush teddies crafted to spread smiles and warmth.",
        category: ["birthday","customized"]
    },
    {
        id: 23,
        name: "Crimson Chocolate Charm",
        price: 3800,
        image: "assets/27.webp",
        description: "Red roses paired with chocolate sticks for a rich and romantic surprise.",
        category: "chocolate-bouquet"
    },
    {
        id: 24,
        name: "Lily & Rose Symphony",
        price: 4500,
        image: "assets/28.webp",
        description: "Elegant white lilies and roses arranged for timeless beauty and celebration.",
        category: ["wedding"]
    },
    {
        id: 25,
        name: "Chocolate Rose Indulgence",
        price: 2800,
        image: "assets/29.webp",
        description: "A rich bouquet of chocolates and red roses crafted for sweet, romantic moments.",
        category: "chocolate-bouquet"
    },
    {
        id: 26,
        name: "Pink Princess Pamper Box",
        price: 2200,
        image: "assets/30.webp",
        description: "A charming pink-themed gift bouquet with beauty treats and floral accents.",
        category: ["perfume-bouquet","customized"]
    },
    {
        id:27,
        name:"The Bouquet of Strong",
        price:1500,
        image:"assets/31.webp",
        description:"A bouquet of strong and powerful women",
        category: ["polaroids-bouquet","birthday"]
    },
    {
        id:28,
        name:"Bouquet of Milk Beda",
        price:700,
        image:"assets/beda.webp",
        description:"A bouquet  contains Milk Beda",
        category: "budget-friendly"   
    },
    {
        id:29,
        name:"Red Rose Bouquet",
        price:1200,
        image:"assets/flo.webp",
        description:"A timeless arrangement of deep red roses, perfect for love and special moments.",
        category:"customized"   
    },
    {
        id:30,
        name:"Red Rose Bouquet with cake",
        price:1800,
        image:"assets/combo.webp",
        description:"Fresh red roses paired with a delicious cake to make celebrations extra special.",
        category:"customized"   
    },{
        id:31,
        name:"50Rs Bouquet (x100) ",
        price:3500,
        image:"assets/50rs.webp",
        description:"A timeless arrangement of 50 rs note special moments.",
        category:"money-bouquet"
    },
    
    {
        id:32,
        name:"20Rs Bouquet (x100) ",
        price:3500,
        image:"assets/20rs.webp",
        description:"A timeless arrangement of 20 rs note for special moments.",
        category:"money-bouquet"
    },
    
    
    {
        id:33,
        name:"Gold choco Bouquet",
        price:5000,
        image:"assets/gold.webp",
        description:"A timeless arrangement of gold chocolates for special moments.",
        category:"chocolate-bouquet"
    },
 
    {
        id:34,
        name:"Hot wheels with rose",
        price:2200,
        image:"assets/HW.webp",
        description:"A Bouquet contains hotwheels collections.",
        category:"hot-wheels"
    },
    {
        id:35,
        name:"100Rs Bouquet (x100 with chocolates)",
        price:4000,
        image:"assets/100rs.webp",
        description:"A Bouquet made up of 100rs note.",
        category:["money-bouquet"]
    },
    {
        id:36,
        name:"Beige polaroid Bouquet",
        price:1200,
        image:"assets/beige.webp",
        description:"A Bouquet made up of polaroids.",
        category:"polaroids-bouquet"
    },
    {
        id:37,
        name:"Red polaroid Bouquet",
        price:1200,
        image:"assets/red.webp",
        description:"A Bouquet made up of polaroids.",
        category:"polaroids-bouquet"
    },
    {
        id:38,
        name:"Forever in Bloom",
        price:1200,
        image:"assets/onnu.webp",
        description: "A timeless rose bouquet capturing your love story in every frame.",
        category: ["polaroids-bouquet", "wedding"]
    },
    {
        id:39,
        name:"Pure Moments",
        price:2500,
        image:"assets/rendu.webp",
        description:"Elegant whites and heartfelt memories woven into one bouquet.",
        category: ["polaroids-bouquet", "wedding"]
    },
    {
        id:40,
        name:"Sweetheart Surprise",
        price:3200,
        image:"assets/moonu.webp",
        description:"Chocolates, cuddles, and captured moments of love.",
        category: ["polaroids-bouquet", "wedding"]
    },
    {
        id:41,
        name:"Our Beautiful Journey",
        price:1900,
        image:"assets/naalu.webp",
        description:"A floral celebration of family, love, and togetherness.",
        category: ["polaroids-bouquet", "wedding"]
    },
    {
        id:42,
        name:"Break for Love",
        price:4500,
        image:"assets/anju.webp",
        description:"A playful bouquet packed with sweetness and smiles",
        category: ["chocolate-bouquet", "birthday"]
    },
    {
        id:43,
        name:"Luxury Celebration Bouquet",
        price:7000,
        image:"assets/wine.webp",
        description:"A premium floral arrangement blending elegant roses,and wine to create a memorable experience.",
        category: ["birthday","customized"]
    },
    {
        id:44,
        name:"Hot wheels pack of 4",
        price:3800,
        image:"assets/hotw.webp",
        description:"A bouquet especially made for hot wheels lovers",
        category:"hot-wheels"
    },
    {
        id:45,
        name:"Mini kitkat delight",
        price:300,
        image:"assets/chocor.webp",
        description:"A small&cute bouquet of kitkat",
        category:["chocolate-bouquet","budget-friendly"]
    },
    {
        id:46,
        name:"Mini hot wheels pack",
        price:800,
        image:"assets/swheels.webp",
        description:"A bouquet with single hotwheels ",
        category:["hot-wheels","budget-friendly"]
    },
    {
        id:47,
        name:"Single rose bouquet",
        price:100,
        image:"assets/rose.webp",
        description:"A bouquet made by a single rose",
        category:"budget-friendly"
    },
    {
        id: 48,
name:"Mini batman surprise",
        price:900,
        image:"assets/bat.webp",
        description:"A bouquet of a single batman",
        category:["hot-wheels","budget-friendly"]
    },
    {
        id:49,
        name:"Golden Sunflower Delight",
        price:500,
        image:"assets/sun.webp",
        description:"A radiant sunflower bouquet , perfect for spreading warmth and happiness.",
        category:"budget-friendly"
    },
    {
        id:50,
        name:"Crimson Rose Harmony",
        price:500,
        image:"assets/violet.webp",
        description:"A romantic blend of deep red roses and soft violet blooms, crafted for heartfelt moments .",
        category:["budget-friendly","customized"]
    },
    {
        id:51,
        name:"multi chocolates bouquet",
        price:2000,
        image:"assets/pika.webp",
        description:"Chocolates with a cute pikachu",
        category:["customized","chocolate-bouquet"]
    },
    {
        id:52,
        name:"Golden Memory Bouquet",
        price:3800,
        image:"assets/ggold.webp",
        description:"A bouquet made up of gold chocolates and polaroids",
        category:["chocolate-bouquet","polaroids-bouquet","birthday"]   
    },
    {
        id:53,
        name:"Sunshine Bloom Bouquet",
        price:2500,
        image:"assets/mary.webp",
        description:"A bouquet made up of Bright flowers for happy moments",
        category:["birthday"]   
    },
    {
        id:54,
        name:"Blush Chocolate Bloom",
        price:5000,
        image:"assets/full.webp",
        description:"Rose wrapped in sweetness",
        category:["chocolate-bouquet","polaroids-bouquet","customized"]   
    },
    {
        id:55,
        name:"Munch bouquet delight",
        price:1200,
        image:"assets/munch.webp",
        description:"Crunchy chocolates with blooms",
        category:["chocolate-bouquet","customized"]   
    },
    {
        id:56,
        name:"Personalized Photo Flower Bouquet",
        price:1200,
        image:"assets/polar.webp",
        description:"Photo framed with flowers",
        category: ["polaroids-bouquet", "customized"]   
    },
    {
        id:57,
        name:"Red rose",
        price:500,
        image:"assets/red-rose.webp",
        description:"A bouquet made up of chocolates and red roses",
        category:"budget-friendly"
    },
    {
        id:58,
        name:"Artificial Rose Bouquet",
        price:500,
        image:"assets/Artificial-Rose.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:59,
        name:"Blue Flower Bouquet",
        price:500,
        image:"assets/Blue-flower.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:60,
        name:"Kitkat & galaxy Bouquet",
        price:1500,
        image:"assets/Chocolate-bout.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:["chocolate-bouquet"]
    },
    {
        id:61,
        name:"Artificial Blue Rose Bouquet",
        price:500,
        image:"assets/art-blue.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:62,
        name:"Redish Pink Rose Bouquet",
        price:500,
        image:"assets/5-rose.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:63,
        name:"Elegant Rose Bouquet",
        price:500,
        image:"assets/Elegant-Rose.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:64,
        name:"Purple blue Rose Bouquet",
        price:500,
        image:"assets/ench-blue.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:65,
        name:"White theme Rose Bouquet",
        price:500,
        image:"assets/white-backrose.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:66,
        name:"Eternal Rose Bouquet",
        price:500,
        image:"assets/Eternal-Rose.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:67,
        name:"Earing Bouquet",
        price:500,
        image:"assets/Grab.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:68,
        name:"Pure Love Bouquet",
        price:500,
        image:"assets/pec.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:69,
        name:"Kinder Joy Bouquet",
        price:180,
        image:"assets/Kinder-joy.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:["budget-friendly","chocolate-bouquet"]
    },
    {
        id:70,
        name:"Mini Flower Bouquet",
        price:500,
        image:"assets/Mini-flower.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:71,
        name:"Sunflower Bouquet",
        price:500,
        image:"assets/Simple-sun.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:72,
        name:"Lays snack Bouquet",
        price:500,
        image:"assets/Snack-attack.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:73,
        name:"Pink Sunflower Bouquet",
        price:500,
        image:"assets/pink-sunflower.webp",
        description:"A grand bouquet of 100 artificial roses, crafted for everlasting beauty and unforgettable moments.",
        category:"budget-friendly"
    },
    {
        id:74,
        name:"Royal Red Anniversary Bouquet",
        price:3500,
        image:"assets/anniversary.webp",
        description:"A luxurious heart of premium red roses crowned with elegance — crafted to celebrate timeless love.",
        category:["wedding"]
    },
    {
        id:75,
        name:"Blush Romance Box",
        price:50000,
        image:"assets/cake.webp",
        description:"A stunning gradient of red, pink, and white roses arranged in a luxury round box.",
        category: ["luxury"]
    },
    {
        id:76,
        name:"Scarlet Birthday Bloom",
        price:3500,
        image:"assets/custom.webp",
        description:"Deep red roses wrapped in elegance",
        category: ["birthday"]
    },
    {
        id:77,
        name:"Golden Heart Delight",
        price:60000,
        image:"assets/chocorose.webp",
        description:"Premium red roses surrounding a heart of Ferrero delights",
        category:["luxury","chocolate-bouquet"]
    },
    {
        id:78,
        name:"Pastel Garden Symphony",
        price:2500,
        image:"assets/enchant.webp",
        description:"A vibrant harmony of roses and seasonal blooms",
        category:"birthday"
    },
    {
        id:79,
        name:"Midnight Glow Elegance",
        price:4500,
        image:"assets/lflow.webp",
        description:"Soft ivory roses wrapped in black luxury paper and illuminated with warm fairy lights",
        category:"birthday"
    },
    {
        id:80,
        name:"Heart Within Heart",
        price:60000,
        image:"assets/yrose.webp",
        description:"A bold sea of red roses embracing a white heart — designed to say “You are my everything.”",
        category:"luxury"
    },
    {
        id:81,
        name:"Blushing Grace",
        price:3500,
        image:"assets/pinkr.webp",
        description:"Delicate pink roses wrapped in pastel elegance",
        category:["birthday","wedding"]
    },
    {
        id:82,
        name:"Crimson Celebration Wrap",
        price:10500,
        image:"assets/brose.webp",
        description:"A dramatic black wrap filled with premium red roses",
        category:["luxury","birthday"]
    },
    {
        id:83,
        name:"The Grand Passion Dome",
        price:60000,
        image:"assets/arab.webp",
        description:"An extravagant dome of handpicked red roses",
        category:"luxury"
    },
    {
        id:84,
        name:"Blush pink delight",
        price:3500,
        image:"assets/pink.webp",
        description:"An extravagant working of blush rose",
        category:"birthday"
    },
    {
        id: 85,
        name: "Single Sunflower delight",
        price: 450,
        image: "assets/sunflower.webp",
        description: "A handcrafted bouquet made with love & meaning",
        category: "budget-friendly"
    },
    {
        id: 86,
        name: "Mini spidey bouqet ",
        price: 350,
        image: "assets/spideys.webp",
        description: "An affordable bouquet that tells your story.",
        category: "budget-friendly"
    },
    {
        id: 87,
        name: "Forever rose bouqet",
        price: 400,
        image: "assets/roseeter.webp",
        description: "Thoughtful gift for special moments.",
        category: "budget-friendly"
    },
    {
        id: 88,
        name: "Pink Rose paper bouquet",
        price: 500,
        image: "assets/ribbonr.webp",
        description: "Elegant handcrafted paper roses with butterfly accent.",
        category: "budget-friendly"
    },
    {
        id: 89,
        name: "Little Racer Surprise",
        price: 500,
        image: "assets/teddywheel.webp",
        description: "Cute teddy with Hot Wheels and blue roses.",
        category: ["budget-friendly","hot-wheels"]
    },
    {
        id: 90,
        name: "Sweet Pastel Bloom",
        price: 450,
        image: "assets/minipink.webp",
        description: "Soft handmade flowers in charming colors.",
        category: "budget-friendly"
    },
    {
        id: 91,
        name: "Yellow tulip delight",
        price: 350,
        image: "assets/tulip.webp",
        description: "Fresh yellow tulips for special moments.",
        category: "budget-friendly"
    },
    {
        id: 92,
        name: "Naruto Love Bundle",
        price: 500,
        image: "assets/naruto.webp",
        description: "Fan-favorite plushies with floral styling.",
        category: "budget-friendly"
    },
    {
        id: 93,
        name: "Rosy Chocolate Delight",
        price: 1500,
        image: "assets/pinkrose.webp",
        description: "Fresh pink roses paired with premium chocolates.",
        category: ["chocolate-bouquet"]
    },
    {
        id: 94,
        name: "Lavender Whisper",
        price: 400,
        image: "assets/purple.webp",
        description: "Single handcrafted rose with elegant wrap.",
        category: "budget-friendly"
    },
    {
        id: 95,
        name: "Sunshine Bloom",
        price: 300,
        image: "assets/ybutter.webp",
        description: "Bright yellow roses with butterfly highlights.",
        category: "budget-friendly"
    },
    {
        id: 96,
        name: "Speed & Sweetness",
        price: 500,
        image: "assets/HOT.webp",
        description: "Hot Wheels toy with chocolates and blue roses.",
        category: ["budget-friendly","hot-wheels"]
    },
    {
        id: 97,
        name: "Saiyan Bloom",
        price: 450,
        image: "assets/goku.webp",
        description: "Bouquet inspired from our sayan kakarot.",
        category: "budget-friendly"
    },
    {
        id: 98,
        name: "Crochet Rose Bouquet",
        price: 350,
        image: "assets/cloth.webp",
        description: "Handcrafted crochet roses with premium wrap.",
        category: "budget-friendly"
    },
    {
        id: 99,
        name: "Basket of Love",
        price: 500,
        image: "assets/basket.webp",
        description: "Fresh red roses in a classic wicker basket.",
        category: "budget-friendly"
    },
    {
        id: 100,
        name: "Royal Love Mix",
        price: 400,
        image: "assets/yrrose.webp",
        description: "Vibrant roses wrapped with festive elegance.",
        category: "budget-friendly"
    },
    {
        id: 101,
        name: "Rustic Red Rose Bouquet",
        price: 350,
        image: "assets/abc.webp",
        description: "Dried red roses wrapped in earthy charm.",
        category: "budget-friendly"
    },
    {
        id: 102,
        name: "Yellow Single Rose Bouquet",
        price: 300,
        image: "assets/smallrose.webp",
        description: "Single yellow rose in premium black wrap.",
        category: "budget-friendly"
    },
    {
        id: 103,
        name: "Perfume Surprise Bouquet",
        price: 4500,
        image: "assets/perfume.webp",
        description: "Beautiful blooms paired with luxury fragrances, creating the perfect gift for any special moment.",
        category: ["perfume-bouquet"]
    },
    {
        id: 104,
        name: "Classic White Rose Wedding Bouquet",
        price: 3500,
        image: "assets/wed1.webp",
        description: "A beautiful classic white rose wedding bouquet beautifully wrapped.",
        category: "wedding"
    },
    

    {
        id: 105,
        name: "Rustic Autumn Rose Bouquet",
        price: 7500,
        image: "assets/wed4.webp",
        description: "A rustic autumn wedding bouquet with dried wheat and orange roses.",
        category: ["wedding"]
    },
   
    {
        id: 106,
        name: "Blue Hydrangea Maska Bouquet",
        price: 8500,
        image: "assets/wed6.webp",
        description: "A classic wedding bouquet featuring large blue hydrangeas and white roses.",
        category: ["wedding"]
    },
    {
        id: 107,
        name: "Boho Pampas Grass Bouquet",
        price: 7500,
        image: "assets/wed7.webp",
        description: "A trendy boho wedding bouquet with dried pampas grass and bleached ferns.",
        category: ["wedding"]
    },
    {
        id: 108,
        name: "Tropical Orchid Bouquet",
        price: 5500,
        image: "assets/orchid.webp",
        description: "A vibrant tropical wedding bouquet with pink and orange orchids.",
        category: ["wedding"]
    },
    {
        id:109,
        name:"Ramzan Themed Bouquet",
        price:3200,
        image:"assets/ramzan.webp",
        description:"A fantabulous money bouquet for ramzan",
        category:["money-bouquet"]
    },
    {
        id:110,
        name:"Midnight Racer's Dream",
        price:3800,
        image:"assets/hotw1.webp",
        description:"A stunning black-wrapped bouquet featuring delicate baby's breath and a collection of classic Hot Wheels cars.",
        category:["hot-wheels"]
    },
    {
        id:111,
        name:"Azure Porsche Elegance",
        price:2000,
        image:"assets/hotw2.webp",
        description:"Vibrant blue roses paired with a sleek Porsche model, wrapped in elegant translucent layers with a butterfly accent.",
        category:["hot-wheels"]
    },
    {
        id:112,
        name:"Romantic Speedway Memories",
        price:1800,
        image:"assets/hotw3.webp",
        description:"Beautiful red roses combined with custom Polaroid memories and fast Hot Wheels cars, perfect for your loved one.",
        category:["hot-wheels", "customized"]
    },
    {
        id:113,
        name:"Royal Blue Crowned Racer",
        price:1800,
        image:"assets/hotw4.webp",
        description:"An impressive arrangement of deep blue roses starring a golden crown and exclusive white/silver Hot Wheels models.",
        category:["hot-wheels"]
    },
    {
        id:114,
        name:"Skyline Track Bouquet",
        price:4500,
        image:"assets/hot5.webp",
        description:"A large sky-blue presentation featuring an exciting collection of Hot Wheels cars nestled among white and blue premium roses.",
        category:["hot-wheels"]
    },
    {
        id:115,
        name:"Sweet Speed Chocolate Mix",
        price:1800,
        image:"assets/hot6.webp",
        description:"The ultimate combo of popular chocolate bars (Snickers, M&Ms) and colorful Hot Wheels cars in a lovely mint wrap.",
        category:["hot-wheels"]
    },
    {
        id:116,
        name:"Blue Rose Hot Wheels Bouquet",
        price:2800,
        image:"assets/hot7.webp",
        description:"Bold blue roses wrapped with a sleek Hot Wheels car — a must-have for every car lover.",
        category:["hot-wheels"]
    },
    {
        id:117,
        name:"Fast & Furious Special Bouquet",
        price:3800,
        image:"assets/hot8.webp",
        description:"Speed meets style — a dramatic bouquet featuring exclusive Fast & Furious Hot Wheels cars.",
        category:["hot-wheels"]
    },
    {
        id:118,
        name:"Black Theme Hot Wheels Bouquet",
        price:1200,
        image:"assets/hot9.webp",
        description:"Sleek black-wrapped bouquet featuring classic Hot Wheels cars for the ultimate car enthusiast.",
        category:["hot-wheels"]
    },
    {
        id:119,
        name:"Retro Gold Speedway",
        price:1200,
        image:"assets/hot10.webp",
        description:"Retro-style Hot Wheels cars gracefully paired with bright blue roses and wrapped in luxurious gold-accented paper.",
        category: ["hot-wheels", "customized"]
    },
    {
        id:120,
        name:"Hot Wheels Rose Special Bouquet",
        price:2500,
        image:"assets/hot11.webp",
        description:"A special bouquet pairing vibrant roses with exciting Hot Wheels cars for a unique gift.",
        category:["hot-wheels"]
    },
    {
        id:121,
        name:"Money bouquet with 100rs note (x50 blue rose)",
        price:2800,
        image:"assets/100rupeeblue.webp",
        description:"A money bouquet made up of 100rs notes",
        category:["money-bouquet"]
    },
    {
        id:122,
        name:"Choco Delight bouquet",
        price:3500,
        image:"assets/allcho2.jpeg",
        description:"All chocolates with love",
        category:["chocolate-bouquet"]
    },
    {
        id:123,
        name:"All chocolates bouquet",
        price:2800,
        image:"assets/allchocolate.jpeg",
        description:"All chocolates with love",
        category:["chocolate-bouquet"]
    },
    {
        id:124,
        name:"Lotte choco pie bouquet",
        price:2000,
        image:"assets/choco_pie.jpeg",
        description:"Soft and delicious choco pie bouquet",
        category:["chocolate-bouquet"]
    },
    {
        id:125,
        name:"Kitkat & silk bouquet",
        price:3000,
        image:"assets/kitkat&silk.jpeg",
        description:"A bouquet of kitkat and silk chocolates",
        category:["chocolate-bouquet"]
    },
    {
        id:126,
        name:"Simple dairy milk bouquet",
        price:250,
        image:"assets/ruba.jpeg",
        description:"A simple bouquet of dairy milk chocolates",
        category:["budget-friendly", "chocolate-bouquet"]
    },
    {
        id:127,
        name:"50 rs heart design bouquet (x50)",
        price:2800,
        image:"assets/50rs heart design.webp",
        description:"A bouquet made up of 50 rs notes in heart design",
        category:["money-bouquet"]
    },
    {
        id:128,
        name:"50 rs red rose bouquet",
        price:1400,
        image:"assets/50rs_with red rose.webp",
        description:"A bouquet made up of 50 rs notes with red roses",
        category:["money-bouquet"]
    },
    {
        id:129,
        name:"all ind currency bouquet",
        price:1200,
        image:"assets/All rs whiteflower.webp",
        description:"A bouquet made up of all Indian currency notes with white flowers",
        category:["money-bouquet","customized"]
    },
    {
        id:130,
        name:"Apt 50 Rupees Cash Bouquet",
        price:900,
        image:"assets/money1.webp",
        description:"money gives you happyness",
        category:["money-bouquet", "budget-friendly","customized"]
    },
    {
        id:131,
        name:"Luxury Currency & Rose Arrangement",
        price:3500,
        image:"assets/money2.webp",
        description:"love is blind",
        category:["money-bouquet","customized"]
    },
    {
        id:132,
        name:"Mega Money & Chocolate Display",
        price:6300,
        image:"assets/money3.webp",
        description:"always you are my favourite",
        category:["money-bouquet","chocolate-bouquet","customized"]
    },
    {
        id:133,
        name:"Elegant Currency Bloom",
        price:2300,
        image:"assets/money4.webp",
        description:"always want more flowers",
        category:["money-bouquet","customized"]
    },
    {
        id:134,
        name:"Stunning Cash & Floral Surprise (x100)",
        price:4000,
        image:"assets/money5.webp",
        description:"everyone is deponds on love ",
        category:["money-bouquet"]
    },
    {
        id:135,
        name:"Trending 100 Rupees Cash Bouquet(x20) ",
        price:800,
        image:"assets/trending 100rs bouquet.webp",
        description:"a bouquet made up of 100 rs notes",
        category: ["money-bouquet", "budget-friendly"]
    },
    {
        id:136,
        name:"Premium 500 Rupees Money Bouquet(x20)",
        price:1000,
        image:"assets/500rs money bouquet.webp",
        description:"a bouquet made up of 500 rs notes",
        category: ["money-bouquet", "budget-friendly"]
    },
    {
        id:137,
        name:"Hot Wheels & Cap Combo Bouquet",
        price:3800,
        image:"assets/hotwheel cap.webp",
        description:"a bouquet made up of hotwheel with a caps",
        category:["hot-wheels"]
    },
    {
        id:138,
        name:"Hot Wheels & Sunflowers Array",
        price:2200,
        image:"assets/hotwheels sun.webp",
        description:"a bouquet made up of hotwheel with a sunflower",
        category:["hot-wheels"]
    },
    {
        id:139,
        name:"Nike Lover's Gift Bouquet",
        price:1900,
        image:"assets/nick gift bouquet.webp",
        description:"nike gift bouquet for all the nike lovers",
        category:["birthday","customized"]
    },
    {
        id:140,
        name:"Hot Wheels & Hershey's Delight",
        price:3500,
        image:"assets/hw hersheys.webp",
        description:"a bouquet made up of hotwheel with a hersheys chocolates",
        category:["hot-wheels"]
    },
    {
        id:141,
        name:"Mixed Indian Currency Bouquet",
        price:3500,
        image:"assets/all rs.webp",
        description:"All Indian currency notes with flowers",
        category:["money-bouquet","customized"]
    },
    {
        id:142,
        name:"Elegant 500 Rupees Floral Cash",
        price:3500,
        image:"assets/500 only.webp",
        description:"500 rs bouquet with flowers",
        category:["money-bouquet"]
    },
    {
        id:143,
        name:"Couples Hot Wheels & Kinder Joy",
        price:1800,
        image:"assets/couple bouquet.webp",
        description:"a bouquet two bouquets hotwheels & kinderjoy for couples",
        category:["hot-wheels","chocolate-bouquet"]
    },
    {
        id:144,
        name:"Miniature Bike Lovers Bouquet",
        price:5200,
        image:"assets/bike bouquet.webp",
        description:"a bouquet whit a bike in the middle for bike lovers",
        category:["birthday"]
    },
    {
        id:145,
        name:"Vibrant Red Hot Wheels Wrap",
        price:3800,
        image:"assets/red hw.webp",
        description:"a bouquet made up of red hotwheels",
        category:["hot-wheels"]
    },
    {
        id:146,
        name:"Spider-Man Hot Wheels Collection",
        price:4200,
        image:"assets/hw with spiderman.webp",
        description:"a bouquet made up of hotwheels with spiderman",
        category:["hot-wheels"]
    },
    {
        id:147,
        name:"Premium Polaroids & Floral Bouquet",
        price:2800,
        image:"assets/pola1.webp",
        description:"A luxurious bouquet featuring photos, small gifts, and floral elements, making it a complete surprise package.",
        category:["polaroids-bouquet"]
    },
    {
        id:148,
        name:"Black-Themed Chocolate & Photo Bouquet",
        price:1500,
        image:"assets/pola2.webp",
        description:"A unique black-themed bouquet combining chocolates and photo memories, perfect for gifting with a sweet twist.",
        category:["polaroids-bouquet"]
     },
     {
        id:149,
        name:"Blush Pink Romance Photo Bouquet",
        price:2800,
        image:"assets/pola3.webp",
        description:"A soft pink bouquet decorated with photos and delicate flowers, ideal for romantic occasions.",
        category:["polaroids-bouquet"]
     },
     {
        id:150,
        name:"Minimalist Black Polaroid Bouquet",
        price:500,
        image:"assets/pola4.webp",
        description:"A minimal yet stylish black wrap bouquet with neatly arranged memories for a modern look.",
        category: ["polaroids-bouquet", "budget-friendly"]
     },
     {
        id:151,
        name:"Deluxe Colorful Photo Celebration",
        price:3200,
        image:"assets/pola5.webp",
        description:"A rich and colorful bouquet packed with photos and decorative elements, perfect for big celebrations.",
        category:["polaroids-bouquet"]
     },
     {
        id:152,
        name:"Red Ribbon Polaroid Elegance",
        price:2200,
        image:"assets/pola6.webp",
        description:"A classy bouquet tied with a bold red ribbon, featuring carefully arranged polaroid memories.",
        category:["polaroids-bouquet"]

     },
     {
        id:153,
        name:"Midnight Elegance Photo Bouquet",
        price:1800,
        image:"assets/pola7.webp",
        description:"A dark-themed elegant bouquet with beautifully arranged polaroid memories, perfect for a classy and unique gift.",
        category:["polaroids-bouquet"]

     },
     {
        id:154,
        name:"Red Roses & Captured Moments",
        price:2000,
        image:"assets/pola8.webp",
        description:"A romantic bouquet featuring red roses and captured memories, symbolizing love and deep emotions.",
        category:["polaroids-bouquet"]

     },
     {
        id:155,
        name:"Subtle Floral Photo Arrangement",
        price:1500,
        image:"assets/pola9.webp",
        description:"A clean and modern bouquet with subtle floral design and neatly arranged photos for a sophisticated look.",
        category:["polaroids-bouquet"]
     },
    {
        id:156,
        name:"Vibrant Mixed Florals & Photos",
        price:2500,
        image:"assets/pola10.webp",
        description:"A vibrant mix of colorful flowers and memories, perfect for birthdays and joyful occasions.",
        category:["polaroids-bouquet"]
    },
    {
        id:157,
        name:"Standing Blush Floral Photo Frame",
        price:1500,
        image:"assets/pola11.webp",
        description:"A unique standing bouquet with soft pink flowers and photo frames, giving a premium decorative feel.",
        category:["polaroids-bouquet"]
    },
    {
        id:158,
        name:"Golden Sunset Polaroid Arrangement",
        price:1800,
        image:"assets/pola12.webp",
        description:"Warm-toned bouquet inspired by sunset vibes, combining golden wrapping and cherished moments.",
        category:["polaroids-bouquet"]

    },
    {
        id:159,
        name:"Miniature Soft Pink Photo Bouquet",
        price:1000,
        image:"assets/pola13.webp",
        description:"Adorable mini bouquet in soft pink, perfect for sweet surprises.",
        category: ["polaroids-bouquet", "budget-friendly"]

    },
    {
        id:160,
        name:"Printed Photos & Floral Touches",
        price:1500,
        image:"assets/nira1.webp",
        description:"Printed photos and elegant floral touches for birthdays and surprises.",
        category:["polaroids-bouquet"]
    },
    {
        id:161,
        name:"Luxurious Pink Theme Photo Bouquet",
        price:2000,
        image:"assets/nira2.webp",
        description:"Luxurious pink-themed bouquet with elegant photos and flowers.",
        category:["polaroids-bouquet"]
    },
    {
        id:162,
        name:"Cream Wrap Premium Polaroid Bouquet",
        price:2000,
        image:"assets/nira3.webp",
        description:"Cream wrap with polaroid pictures for a premium aesthetic look.",
        category:["polaroids-bouquet"]

    },
    {
        id:163,
        name:"Ruby Red Roses & Memories",
        price:2000,
        image:"assets/nira4.webp",
        description:"Red-themed bouquet with photos and roses for unforgettable moments.",
        category:["polaroids-bouquet"]
    },
    {
        id:164,
        name:"Modern Black Wrap Photo Display",
        price:2000,
        image:"assets/nira5.webp",
        description:"Stylish black wrap with modern design and personalized photos.",
        category:["polaroids-bouquet"]
    },
    {
        id:165,
        name:"Calming Pastel Photo Bouquet",
        price:2000,
        image:"assets/nira6.webp",
        description:"Soft pastel tones with photos for a calm and elegant vibe.",
        category:["polaroids-bouquet"]
    },
    {
        id:166,
        name:"Joyful Pink Memories Bouquet",
        price:2000,
        image:"assets/nira7.webp",
        description:"Vibrant pink bouquet with joyful memories for celebrations.",
        category:["polaroids-bouquet"]
    },
    {
        id:167,
        name:"Sky Blue Floral Photo Arrangement",
        price:2000,
        image:"assets/nira8.webp",
        description:"Blue-themed bouquet with photos and flowers for beautiful memories.",
        category:["polaroids-bouquet"]
    },
    {
        id:168,
        name:"Rustic Brown Roses & Memories",
        price:2000,
        image:"assets/nira9.webp",
        description:"Rustic brown wrap with roses and photos for heartfelt gifting.",
        category:["polaroids-bouquet"]
    },
    {
        id:169,
        name:"Golden Wrap Floral & Photo Bouquet",
        price:2000,
        image:"assets/nira10.webp",
        description:"Golden-toned wrap with precious memories and elegant floral accents.",
        category:["polaroids-bouquet"]
    },
    {
        id:170,
        name:"Maroon Blooms & Premium Perfume",
        price:4200,
        image:"assets/niran1.webp",
        description:"Fresh blooms paired with premium fragrance in rich maroon tones.",
        category:["perfume-bouquet"]
    },
    {

        id:171,
        name:"Soft Pink Nail Polish & Florals",
        price:3500,
        image:"assets/niran2.webp",
        description:"Elegant flowers with premium nail polishes in soft pink wrap.",
        category:["all-bouquet"]
    },
    {
        id:172,
        name:"Gourmet Chocolates & Red Roses Box",
        price:7000,
        image:"assets/niran4.webp",
        description:"Gourmet chocolates with fresh flowers in rich red wrap.",
        category:["chocolate-bouquet"]
    },
    {
        id:173,
        name:"Floral Box with Personalized Photos",
        price:3200,
        image:"assets/niran5.webp",
        description:"Soft roses and personalized photos in an elegant floral box.",
        category:["polaroids-bouquet"]
    },
    {
        id:174,
        name:"Pink & White Roses Perfume Box",
        price:25000,
        image:"assets/niran6.webp",
        description:"Luxurious perfume with pink and white roses in a black box.",
        category:["perfume-bouquet", "luxury"]
    },
    {
        id:175,
        name:"Blush Pink Luxury Photo Box",
        price:25000,
        image:"assets/niran7.webp",
        description:"Blush pink flowers and photos arranged in a luxury box.",
        category: ["perfume-bouquet", "luxury"]
    },
    {
        id:176,
        name:"Soft Pink Roses Floral Dome",
        price:3800,
        image:"assets/niran8.webp",
        description:"Personalized dome with soft pink roses — a timeless keepsake.",
        category:["perfume-bouquet"]
    },
    {
        id:177,
        name:"Beauty Essentials & Roses Collection",
        price:35000,
        image:"assets/niran9.webp",
        description:"Roses with beauty essentials for makeup lovers.",
        category:["perfume-bouquet", "luxury"]
    },
    {
        id:178,
        name:"Pink Roses Sweetheart Bundle",
        price:5500,
        image:"assets/niran10.webp",
        description:"Pink roses with thoughtful add-ons to express love and care.",
        category:["perfume-bouquet"]
    },
    {
        id:179,
        name:"Red Roses Passion Gift Hamper",
        price:7200,
        image:"assets/niran11.webp",
        description:"Red roses with chocolates and gifts in one perfect bundle.",
        category:["perfume-bouquet"]
    },
    {
        id:180,
        name:"Red & White Roses Photo Bouquet",
        price:2500,
        image:"assets/niran12.webp",
        description:"Red and white roses paired with your precious photo memories.",
        category:["polaroids-bouquet"]
    },
    {
        id:181,
        name:"Lavender Yardley & Chocolate Bouquet",
        price:3200,
        image:"assets/niran13.webp",
        description:"Lavender-themed bouquet with chocolates and decorative flowers.",
        category:["customized", "chocolate-bouquet"],
    },
    {
        id:182,
        name:"Blush Beauty & Chocolates Bundle",
        price:4200,
        image:"assets/niran14.webp",
        description:"Blush pink bouquet with beauty products, chocolates, and cute gifts.",
        category: ["customized", "chocolate-bouquet"]
    },
    {
        id:183,
        name:"Gold & Blush Photo Chocolates Bouquet",
        price:2500,
        image:"assets/niran15.webp",
        description:"Gold and blush pink bouquet with photos, chocolates, and flowers.",
        category: ["customized", "chocolate-bouquet"]
    },
    {
        id:184,
        name:"Classic Red Rose Floral Wrap",
        price:3800,
        image:"assets/niran17.webp",
        description:"Fresh roses in elegant red wrap, symbolizing love and passion.",
        category:["perfume-bouquet"]
    },
    {
        id:185,
        name: "Royal Blue Nivea Grooming Bouquet",
        price: 2000,
        image: "assets/img3.webp",
        description: "Nivea Men grooming products with chocolates in royal blue wrap.",
        category: ["birthday", "customized","perfume-bouquet"]
    },
    {
        id:186,
        name: "White & Gold Men's Care Bouquet",
        price: 2000,
        image: "assets/img4.webp",
        description: "Men's hair care products with flowers in white and gold wrap.",
        category: ["birthday", "customized"]

    },
    {
        id:187,
        name:  "Black & Gold Chanel Luxury Bouquet",
        price: 2000,
        image: "assets/img5.webp",
        description: "Chanel luxury products with silk roses in black and gold wrap.",
        category: ["perfume-bouquet", "customized"]
    },
    {
        id:188,
        name:  "Gucci Bloom & Ferrero Rocher Wrap",
        price: 2000,
        image: "assets/img6.webp",
        description: "Ferrero Rocher and Gucci Bloom perfume in elegant kraft wrap.",
        category: ["perfume-bouquet"]
    },
    {
        id:189,
        name:  "Holographic Perfume & Godiva Bouquet",
        price: 2000,
        image: "assets/img7.webp",
        description: "Dreamy holographic bouquet with perfume, Godiva, and fairy lights.",
        category: ["perfume-bouquet", "customized"]
    },
    {
        id:190,
        name:  "Fresh Roses, Cash & Chocolates",
        price: 2000,
        image: "assets/nirma1.webp",
        description: "Fresh roses, chocolates, and money in one unique bouquet.",
        category: ["money-bouquet", "chocolate-bouquet", "customized"]
    },
    {
        id:191,
        name:  "Fresh Florals & Premium Perfume",
        price: 2000,
        image: "assets/nirma2.webp",
        description: " A luxurious bouquet that combines the elegance of fresh flowers with the allure of premium perfumes.",
        category: ["perfume-bouquet", "customized"]
    },
    {
        id:192,
        name:  "KitKat Romantic Twist Bouquet",
        price: 1000,
        image: "assets/nirma3.webp",
        description: " kit kat bouquet with a romantic twist.",
        category: ["chocolate-bouquet", "budget-friendly"]
    },
    {
        id:193,
        name:  "Custom Friends Polaroid Bouquet",
        price: 2800,
        image: "assets/nirma4.webp",
        description: "A customized polaroids bouquet for friends and loved ones.",
        category: ["polaroids-bouquet", "customized"]
    },
    {
        id:194,
        name:  "KitKat Sweet Romance Bouquet",
        price: 1000,
        image: "assets/nirma5.webp",
        description: "kit kat bouquet with a romantic twist.",
        category: ["chocolate-bouquet", "budget-friendly"]
    },
        {
        id:195,
        name:"Black Wrap Roses & Chocolates"  ,
        price: 3200,
        image: "assets/t1.webp",
        description: "Black-wrapped bouquet with red roses, baby's breath, and chocolates.",
        category: ["chocolate-bouquet"]
    },
    {
        id:196,
        name:"Beige Wrap Chanel Roses Bouquet" ,
        price: 2000,
        image: "assets/t2.webp",
        description: "Beige bouquet with cream roses, Chanel items, and gold cosmetics.",
        category: ["perfume-bouquet"]
    },
    {

        id:197,
        name:"Milka & Milky Way Purple Bouquet" ,
        price: 3000,
        image: "assets/t3.webp",
        description: "Purple-pink bouquet with Milka and Milky Way chocolates.",
        category: ["chocolate-bouquet"]
    },
    {
        
        id:198,
        name:"Black Wrap Bears & Heart Balloons",
        price: 6000,
        image: "assets/t4.webp",
        description: "Black bouquet with red heart balloons, teddy bear, roses, and chocolates.",
        category: ["chocolate-bouquet"]
    },
    {
        id:199,
        name:"Grand Black Wrap Red Roses" ,
        price: 6500,
        image: "assets/t5.webp",
        description: "Large black bouquet of red roses and assorted chocolates.",
        category: ["chocolate-bouquet"]
    },
    {

        id:200,
        name:"Gucci & Burberry Fragrance Box" ,
        price: 2000,
        image: "assets/t6.webp",
        description: "Luxury black box with Gucci, Burberry fragrances, chocolates, and white flowers.",
        category: ["perfume-bouquet"]
    },
    {
        id:201,
        name:"Purple Wrap Lavender & Makeup",
        price:2000,
        image:"assets/t7.webp",
        description: "Purple-wrapped bouquet with lavender, blush roses, and makeup.",
        category: ["perfume-bouquet"]
     },
     {
        id:202,
        name:"Pink Roses & Premium Beauty Wrap",
        price:2000,
        image:"assets/t8.webp",
        description: "Pink roses with baby's breath and premium beauty brands in a soft pink wrap.",
        category: ["perfume-bouquet"]
     },
     {
        id:203,
        name:"Purple Teddy & Gifts Flower Box",
        price:2000,
        image:"assets/t9.webp",
        description: "Purple teddy bear with gifts, snow globe, jewelry, chocolates, and flowers.",
        category: ["perfume-bouquet"]
     },
     {
        id:204,
        name:"Black Wrap Red Roses & Skincare" ,
        price:2000,
        image:"assets/t10.webp",
        description: "Red roses with luxury skincare and makeup in dramatic black paper.",
        category: ["perfume-bouquet"]
    },
    {
        id:205,
        name: "Soft Pink Dior Beauty Bouquet" ,
        price:2000,
        image:"assets/t11.webp",
        description: "Bouquet with Dior, luxury beauty items, roses, and chocolates in soft pink.",
        category: ["perfume-bouquet"]
    },
    {

        id:206,
        name: "All-Black Coca-Cola & Candy Bouquet" ,
        price:4500,
        image:"assets/t12.webp",
        description: "All-black bouquet with Coca-Cola bottles, KitKat, Snickers, and chocolates.",
        category: ["chocolate-bouquet"]
    },
    {
        id:207,
        name:  "Kinder Joy & KitKat Photo Bouquet",
        price:3000,
        image:"assets/t13.webp",
        description: "Personalized birthday bouquet with photos, Kinder Joy, KitKat, and roses.",
        category:["chocolate-bouquet","polaroids-bouquet", "customized"]
    },

    {
        id:208,
        name:  "Hot Wheels Money & KitKat Luxury Bouquet",
        price:5500,
        image:"assets/a1.webp",
        description: "Premium navy bouquet with 10+ Hot Wheels cars, KitKat bars, snacks & money notes — the ultimate gift for car enthusiasts.",
        category: ["hot-wheels", "money-bouquet"]
    },
    
    {
        id:209,
        name:  "Hot Wheels Daisy Bouquet",
        price:2500,
        image:"assets/a2.webp",
        description: "Kraft-wrapped daisy bouquet nestled with Hot Wheels classics including the Stingray & DeLorean — charming for kids and collectors alike.",
        category: ["hot-wheels"]
    },
    {
        id:210,
        name:   "Adventure Force Snack Attack Bouquet",
        price:4500,
        image:"assets/a3.webp",
        description: "Vibrant bouquet packed with Adventure Force die-cast cars, Cheetos, Snickers & fun snacks — playful and bold for any boy's celebration.",
        category: ["hot-wheels"]
    },
    {
        id:211,
        name:   "Red Rose Noir Bouquet",
        price:2500,
        image:"assets/patr1.webp",
        description: "Deep red roses with white baby's breath, wrapped in black matte paper and finished with a bold red satin ribbon.",
        category: ["birthday"]
    },
    {
        id:212,
        name:  "Ferrero Rocher Peach Bloom Bouquet",
        price:2500,
        image:"assets/patr3.webp",
        description: "Peach and cream bouquet overflowing with ~18 Ferrero Rocher chocolates, baby's breath, and fern leaves.",
        category: [ "chocolate-bouquet"]
    },
    {
        id:213,
        name:  "Happy Birthday Ferrero Mini Bouquet",
        price:1500,
        image:"assets/patr4.webp",
        description: "Petite sage green bouquet with Ferrero Rocher chocolates, a sparkly Happy Birthday topper, and a lace bow ribbon.",
        category: ["chocolate-bouquet", "birthday"]
    },
    {
        id:214,
        name:   "Make Over Cosmetics Bouquet",
        price:2000,
        image:"assets/patr5.webp",
        description: "Black linen-wrapped bouquet featuring Make Over lipstick, gloss, foundation & spray with peach daisies and a heart balloon.",
        category: ["perfume-bouquet"]
    },
    {
        id:215,
        name:   "Black & Gold Elegance Bouquet",
        price:2000,
        image:"assets/patr6.webp",
        description: "Tall black matte fan bouquet with blush roses and Ferrero Rocher chocolates, finished with a gold satin bow.",
        category: ["chocolate-bouquet"]
    },
    {
        id:216,
        name:   "Teddy Bear Rose & Ferrero Bouquet",
        price: 2500,
        image: "assets/patr7.webp",
        description: "Pink and gold bouquet with dusty pink silk roses, Ferrero Rocher chocolates, and a white plush teddy bear.",
        category: ["chocolate-bouquet"]
    },
    {
        id:217,
        name:    "Just For You Ferrero Noir Bouquet",
        price:2800,
        image:"assets/patr8.webp",
        description: "Black matte bouquet with blush pink silk roses and a Gucci Bloom perfume bottle at center — sleek and sophisticated.",
        category: ["chocolate-bouquet"]
    },
    {
        id:218,
        name: "KitKat Black Gold Bouquet",
        price:2000,
        image:"assets/patr9.webp",
        description: "Black and gold bouquet with generous KitKat chocolates and blush pink silk roses, tied with a gold satin ribbon.",
        category:["chocolate-bouquet"]
    },
    {
        id:219,
        name: "Kinder Rose Bouquet",
        price:2000,
        image:"assets/patr10.webp",
        description: "Soft pink kraft bouquet blending fresh pink roses and Kinder chocolates for a playful, romantic gift.",
        category: ["chocolate-bouquet"]

    },
    {
        id:220,
        name: "Nude Luxe Beauty & Cake Pop Bouquet",
        price:2000,
        image:"assets/patr11.webp",
        description: "Nude-toned bouquet with luxury beauty products, cake pops, and blush pink silk roses in a soft pink ribbon.",
        category: ["polaroids-bouquet"]
    } ,
    {
        id:221,
        name:"Pink Glam Beauty Bouquet",
        price:2000,
        image:"assets/patr12.webp",
        description: "Soft pink bouquet with luxury beauty products and blush silk roses, finished with a delicate pink satin ribbon.",
        category: ["perfume-bouquet"]
    },
    {
        id:222,
        name: "GRWM Twin Beauty Bouquet",
        price:2000,
        image:"assets/b13.webp", 
        description: "Black matte bouquet with gourmet chocolates and luxury beauty products, accented with blush roses and a black ribbon.",
        category: ["perfume-bouquet"]
    },
    {
       id:223,
       name: "Huda Beauty Gucci Luxe Bouquet",
       price:2000,
       image:"assets/patr14.webp",
       description: "A high-end bouquet wrapped in luxurious black matte paper, featuring a curated selection of Huda Beauty and Gucci products,",
       category: ["perfume-bouquet"]
    },
    {
        id:224,
        name:  "Cadbury Rose Bouquet",
        price:2800,
        image:"assets/patr15.webp",
        description: "Soft pink bouquet with fresh pink roses and Cadbury chocolates — sweet, charming, and perfect for gifting.",
        category: ["chocolate-bouquet"]
    },
    {
        id:225,
        name:  "Whispers of Love",
        price:5800,
        image:"assets/masca.webp",
        description: "A gentle blend of colors blooming in perfect balance",
        category: ["wedding"]
    },
    {
        id:226,
        name:  "dairy milk bouquet",
        price:3800,
        image:"assets/patr16.webp",
        description: "a delightful bouquet of dairy milk chocolates wrapped in elegant paper.",
        category: ["chocolate-bouquet", "customized"]
    },
    {
        id:227,
        name:  "Luxe Makeup Bloom Bouquet",
        price:7500,
        image:"assets/patr17.webp",
        description: "Premium cosmetics elegantly arranged with blooms — a glamorous gift for beauty lovers.",
        category: ["customized", "perfume-bouquet"]
    },
    {
        id:228,
        name:  "Prestige Beauty Bouquet",
        price:8500,
        image:"assets/patr18.webp",
        description: "High-end cosmetic brands beautifully arranged with fresh florals for the ultimate glam gift.",
        category: ["customized", "perfume-bouquet"]
    },
    {
        id:229,
        name:  "Signature Cosmetics Bouquet",
        price:9500,
        image:"assets/patr19.webp",
        description: "A curated signature cosmetic bouquet blending beauty essentials with elegant floral styling.",
        category: ["customized", "perfume-bouquet"]
    },
    {
        id:230,
        name:  "Grand Beauty Celebration Bouquet",
        price:10500,
        image:"assets/patrr20.webp",
        description: "A grand statement of luxury — premium cosmetics and blooms crafted for grand celebrations.",
        category: ["customized", "perfume-bouquet", "luxury"]
    },
    {
        id:231,
        name:  "Elite Cosmetics Floral Bouquet",
        price:11500,
        image:"assets/patr21.webp",
        description: "Top-tier cosmetics nestled with elegant flowers — the most exquisite beauty gift bouquet.",
        category: ["customized", "perfume-bouquet", "luxury"]
    },
    {
        id:232,
        name:  "Spring Bloom Arrangement",
        price:3800,
        image:"assets/thush2.webp",
        description: "A fresh and vibrant floral arrangement bursting with seasonal blooms for every occasion.",
        category: ["customized", "birthday", "wedding"]
    },
    {
        id:233,
        name:  "Pastel Garden Bouquet",
        price:4500,
        image:"assets/thus3.webp",
        description: "Soft pastel flowers elegantly wrapped — a timeless floral gift for weddings and birthdays.",
        category: ["customized", "birthday", "wedding"]
    },
    {
        id:234,
        name:  "Classic Floral Wrap",
        price:5000,
        image:"assets/thush4.webp",
        description: "A classic, beautifully wrapped floral bouquet perfect for any celebration or heartfelt gift.",
        category: ["customized", "birthday", "wedding"]
    },
    {
        id:235,
        name:  "Grand Luxury Floral Centrepiece (Only Pre-Booking)",
        price:12000,
        image:"assets/thush10.webp",
        description: "An exquisite large-scale luxury floral centrepiece — the pinnacle of gifting elegance.",
        category: ["customized", "birthday", "wedding", "luxury"]
    },
    {
        id:236,
        name:  "Ivory Blossom Bouquet",
        price:3800,
        image:"assets/thush11.webp",
        description: "Elegant ivory and white blossoms arranged with grace — perfect for weddings and celebrations.",
        category: ["customized", "birthday", "wedding"]
    },
    {
        id:237,
        name:  "hotwheels bouquet with flowers",
        price:4000,
        image:"assets/box.webp",
        description: "A fun and unique gift for car enthusiasts of all ages.",
        category: ["birthday", "hot-wheels"]
    },
    {
        id:238,
        name:  "Hot Wheels & Floral Surprise",
        price:600,
        image:"assets/box1.webp",
        description: "A delightful combination of Hot Wheels and fresh floral arrangements for a unique gift experience.",
        category: ["budget-friendly", "hot-wheels"]

    },
    {
        id:239,
        name:  "Hot Wheels & Flowers Extravaganza",
        price:2000,
        image:"assets/box2.webp",
        description: "An extravagant gift featuring a variety of Hot Wheels cars and a stunning floral bouquet for a memorable celebration.",
        category: [ "hot-wheels"]
    },
    {
        id:240,
        name:  "Hot Wheels & Floral Delight",
        price:1500,
        image:"assets/box6.webp",
        description: "A delightful gift set combining the excitement of Hot Wheels with the beauty of fresh flowers for a perfect birthday surprise.",
        category: [ "hot-wheels"]
    },
    {
        id:241,
        name:  "Hot Wheels fantasy car bouquet",
        price:1500,
        image:"assets/box7.webp",
        description: "A whimsical bouquet featuring fantasy Hot Wheels cars and vibrant floral arrangements for a fun and imaginative gift.",
        category: [ "hot-wheels"]
    },
    {
        id:242,
        name:  "Hot Wheels red car collection bouquet",
        price:2000,
        image:"assets/box8.webp",
        description: "A striking bouquet showcasing a collection of red Hot Wheels cars paired with elegant floral accents for a bold and memorable gift.",
        category: ["hot-wheels"]
    },
    {
        id:243,
        name:  "Hot Wheels with batman funko pop bouquet",
        price:2500,
        image:"assets/box9.webp",
        description: "A unique bouquet featuring a selection of Hot Wheels cars and a stylish Batman FUNKO POP for a fun and exciting gift.",
        category: ["customized" , "hot-wheels"]
    }
];
const counters = document.querySelectorAll(".trust-card h3");

counters.forEach(counter => {
  let target = counter.innerText;
  let count = 0;

  let update = () => {
    if (count < parseInt(target)) {
      count += Math.ceil(parseInt(target) / 50);
      counter.innerText = count + "+";
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

// Cart is noidw an array of { product, quantity } objects
let cart = [];
let currentCategory = 'all';
let searchTerm = '';
let maxPrice = 100000;
let occasionFilter = 'all';
let wishlist = new Set();
let selectedProductForModal = null;
let modalQuantity = 1;

const productGrid = document.getElementById('product-grid');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');
const searchInput = document.getElementById('search-input');
const messageInput = document.getElementById('message-input');
const productModal = document.getElementById('product-modal');
const productModalOverlay = document.getElementById('product-modal-overlay');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const orderStatus = document.getElementById('order-status');

function init() {
    setupPageLoader();
    setupCategoryFilters();
    setupSearchFilters();
    setupProductInteractions();
    setupLightbox();
    setupProductModal();
    setupScrollAnimations();
    setupRipple();
    setupNavbarScroll();
    setupScrollToTop();
    createToastContainer();
    renderProducts();
    updateCartUI();
}

// ================== TOAST NOTIFICATION ==================
function createToastContainer() {
    if (document.getElementById('toast-container')) return;
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
}

function showToast(productName, productImage) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `
        <div class="toast-icon">
            <img src="${productImage}" alt="${productName}">
        </div>
        <div class="toast-body">
            <span class="toast-check"><i class="fas fa-check-circle"></i></span>
            <span class="toast-text"><strong>${productName}</strong> added to cart</span>
        </div>
        <button class="toast-view-cart" onclick="toggleCart(true); this.closest('.cart-toast').remove();">
            View Cart
        </button>
        <button class="toast-close" onclick="this.closest('.cart-toast').remove();">&times;</button>
    `;
    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Auto-remove after 3.5 seconds
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ================== PAGE LOADER ==================
function setupPageLoader() {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 300);
    });
    
    // Fallback: hide loader after 1.5 seconds max
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
}

// ================== SCROLL TO TOP ==================
function setupScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        if (typeof lenis !== 'undefined') {
            lenis.scrollTo(0);
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update current category
            currentCategory = button.dataset.category.toLowerCase().trim();
            // Re-render products
            renderProducts();
        });
    });
}

function setupSearchFilters() {
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            searchTerm = event.target.value.trim().toLowerCase();
            renderProducts();
        });
    }


}

function setupProductInteractions() {
    if (!productGrid) {
        return;
    }

    productGrid.addEventListener('click', (event) => {
        const addButton = event.target.closest('.add-btn');

        if (addButton) {
            const id = Number(addButton.dataset.id);
            addToCart(id);
        }
    });
}


function setupLightbox() {
    if (!lightbox || !lightboxImage) {
        return;
    }

    // Use event delegation for dynamic images
    document.addEventListener('click', (event) => {
        const target = event.target.closest('.gallery-image, .product-image');
        if (target && target.tagName === 'IMG') {
            lightboxImage.src = target.src;
            lightbox.classList.add('active');
        }
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
    };

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox || event.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });
}

function setupProductModal() {
    // Close modal with ESC key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeProductModal();
        }
    });

    // Close modal if clicking on overlay
    if (productModalOverlay) {
        productModalOverlay.addEventListener('click', (event) => {
            if (event.target === productModalOverlay) {
                closeProductModal();
            }
        });
    }
}



function setupScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .slide-in');
    if (!('IntersectionObserver' in window) || revealElements.length === 0) {
        revealElements.forEach(el => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
}

function setupRipple() {
    document.addEventListener('click', (event) => {
        const target = event.target.closest('.ripple');
        if (!target) {
            return;
        }
        
        // Don't apply ripple to quantity buttons
        if (event.target.closest('.qty-btn')) {
            return;
        }
        
        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;
        const rect = target.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');

        const existing = target.querySelector('.ripple-effect');
        if (existing) {
            existing.remove();
        }
        target.appendChild(circle);
    });
}


function normalizeCategory(product) {
    const rawCategory = product.category || product.cartegory || '';
    if (Array.isArray(rawCategory)) {
        return rawCategory.map(c => String(c).toLowerCase().trim().replace(/\s+/g, '-'));
    }
    return [String(rawCategory).toLowerCase().trim().replace(/\s+/g, '-')];
}

function renderProducts() {
    if (!productGrid) {
        return;
    }
    const filteredProducts = products.filter(product => {
        const productCategories = normalizeCategory(product);
        const matchesCategory = currentCategory === 'all' || productCategories.includes(currentCategory);
        const matchesOccasion = occasionFilter === 'all' || productCategories.includes(occasionFilter);
        const matchesSearch = !searchTerm || product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        const matchesPrice = product.price <= maxPrice;
        return matchesCategory && matchesOccasion && matchesSearch && matchesPrice;
    });

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search" style="font-size: 2rem; opacity: 0.3; margin-bottom: 0.5rem; color: var(--accent-color);"></i>
                <p>No bouquets match your filters.</p>
            </div>`;
        return;
    }

    productGrid.innerHTML = filteredProducts.map((product, index) => {
        const isCustomizable = normalizeCategory(product).some(cat => ['perfume-bouquet', 'customized'].includes(cat));
        const priceHTML = isCustomizable ? '' : `<div class="product-price">INR ${product.price.toLocaleString('en-IN')}</div>`;
        
        let actionBtn;
        if (isCustomizable) {
            actionBtn = `<button class="add-btn customize-wa-btn ripple" data-id="${product.id}" data-name="${product.name.replace(/"/g, '&quot;')}" onclick="openPerfumeWhatsApp('${product.name.replace(/'/g, "\\'")}', '${product.image}')"><i class="fa-brands fa-whatsapp"></i> Customize Bouquet</button>`;
        } else if (product.prebook) {
            actionBtn = `<button class="add-btn prebook-btn ripple" data-id="${product.id}" onclick="openPrebookWhatsApp('${product.name.replace(/'/g, "\\'")}', '${product.image}')"><i class="fas fa-calendar-check"></i> Prebook 1 week before</button>`;
        } else {
            actionBtn = `<button class="add-btn ripple" data-id="${product.id}" aria-label="Add ${product.name.replace(/\"/g, '&quot;')} to cart"><i class="fas fa-cart-plus"></i> Add to Cart</button>`;
        }

        return `
        <div class="product-card reveal" style="--card-index: ${index}">
            <img src="${product.image}" alt="${product.name}" class="product-image gallery-image" loading="lazy" decoding="async">
            <div class="product-info">
                <div class="product-meta">
                    <h3 class="product-title">${product.name}</h3>
                </div>
                <p class="product-desc">${product.description}</p>
                ${priceHTML}
                ${actionBtn}
            </div>
        </div>`;
    }).join('');

    setupScrollAnimations();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        selectedProductForModal = product;
        modalQuantity = 1; // Reset quantity for new modal
        showProductModal(product);
    }
}

function showProductModal(product) {
    const modalProductImage = document.getElementById('modal-product-image');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductDescription = document.getElementById('modal-product-description');
    const modalProductPrice = document.getElementById('modal-product-price');
    const modalQtySelector = document.querySelector('.modal-qty-selector');
    const modalAddBtn = document.querySelector('.modal-add-btn');

    const isCustomizable = normalizeCategory(product).some(cat => ['perfume-bouquet', 'customized'].includes(cat));

    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductName.textContent = product.name;
    modalProductDescription.textContent = product.description;

    if (isCustomizable) {
        // Hide price and quantity selector for customizable bouquets
        modalProductPrice.style.display = 'none';
        if (modalQtySelector) modalQtySelector.style.display = 'none';
        // Swap button to WhatsApp customize
        if (modalAddBtn) {
            modalAddBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Customize Bouquet';
            modalAddBtn.className = 'modal-add-btn ripple customize-wa-modal-btn';
            modalAddBtn.onclick = () => { openPerfumeWhatsApp(product.name, product.image); closeProductModal(); };
        }
    } else if (product.prebook) {
        // Prebook product
        modalProductPrice.style.display = '';
        modalProductPrice.textContent = `INR ${product.price.toLocaleString('en-IN')}`;
        if (modalQtySelector) modalQtySelector.style.display = 'none'; // Hide quantity for prebook?
        if (modalAddBtn) {
            modalAddBtn.innerHTML = '<i class="fas fa-calendar-check"></i> Prebook 1 week before';
            modalAddBtn.className = 'modal-add-btn ripple prebook-modal-btn';
            modalAddBtn.onclick = () => { openPrebookWhatsApp(product.name, product.image); closeProductModal(); };
        }
    } else {
        // Normal product — show price, qty, add-to-cart
        modalProductPrice.style.display = '';
        modalProductPrice.textContent = `INR ${product.price.toLocaleString('en-IN')}`;
        if (modalQtySelector) modalQtySelector.style.display = '';
        if (modalAddBtn) {
            modalAddBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
            modalAddBtn.className = 'modal-add-btn ripple';
            modalAddBtn.onclick = confirmAddToCart;
        }
    }

    // Update quantity display
    const qtyDisplay = document.getElementById('modal-qty-value');
    if (qtyDisplay) qtyDisplay.textContent = modalQuantity;

    if (productModal && productModalOverlay) {
        productModal.classList.add('active');
        productModalOverlay.classList.add('active');
    }
}

function closeProductModal() {
    if (productModal && productModalOverlay) {
        productModal.classList.remove('active');
        productModalOverlay.classList.remove('active');
    }
    selectedProductForModal = null;
    modalQuantity = 1;
}

// Modal quantity controls
function modalQtyMinus() {
    if (modalQuantity > 1) {
        modalQuantity--;
        const qtyDisplay = document.getElementById('modal-qty-value');
        if (qtyDisplay) qtyDisplay.textContent = modalQuantity;
    }
}

function modalQtyPlus() {
    if (modalQuantity < 99) {
        modalQuantity++;
        const qtyDisplay = document.getElementById('modal-qty-value');
        if (qtyDisplay) qtyDisplay.textContent = modalQuantity;
    }
}

// Add product to cart with quantity support
function addProductToCart(product, quantity) {
    const existingIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ product: product, quantity: quantity });
    }
    updateCartUI();

    // Bump animation on cart count
    cartCountElement.classList.add('bump');
    setTimeout(() => cartCountElement.classList.remove('bump'), 400);
}

function confirmAddToCart() {
    if (selectedProductForModal) {
        addProductToCart(selectedProductForModal, modalQuantity);
        showToast(selectedProductForModal.name, selectedProductForModal.image);
        closeProductModal();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartQty(index, delta) {
    if (!cart[index]) return;
    cart[index].quantity += delta;

    // If quantity reaches 0, remove the item and do a full re-render
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        updateCartUI();
        return;
    }

    // --- Targeted in-place update (no flicker) ---
    const cartItem = cartItemsContainer.querySelector(`.cart-item[data-index="${index}"]`);
    if (cartItem) {
        // Update only the quantity number
        const qtySpan = cartItem.querySelector('.qty-value');
        if (qtySpan) qtySpan.textContent = cart[index].quantity;

        // Update the item price
        const priceSpan = cartItem.querySelector('.item-price');
        if (priceSpan) priceSpan.textContent = `INR ${(cart[index].product.price * cart[index].quantity).toLocaleString('en-IN')}`;
    }

    // Update cart count badge and total
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    cartTotalElement.textContent = `INR ${total.toLocaleString('en-IN')}`;
}

function updateCartUI() {
    // Update count — total number of items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;

    // Update items list
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fas fa-basket-shopping"></i>
                <p>Your cart is empty</p>
            </div>`;
    } else {
        cartItemsContainer.innerHTML = cart.map((entry, index) => `
            <div class="cart-item" data-index="${index}">
                <img src="${entry.product.image}" alt="${entry.product.name}">
                <div class="item-details">
                    <span class="item-title">${entry.product.name}</span>
                    <span class="item-price">INR ${(entry.product.price * entry.quantity).toLocaleString('en-IN')}</span>
                    <div class="cart-qty-controls">
                        <button class="qty-btn" onclick="updateCartQty(${index}, -1)" aria-label="Decrease quantity">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="qty-value">${entry.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQty(${index}, 1)" aria-label="Increase quantity">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="item-remove" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash-alt"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    cartTotalElement.textContent = `INR ${total.toLocaleString('en-IN')}`;
}

function toggleCart(forceOpen = null) {
    if (forceOpen === true) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    } else if (forceOpen === false) {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    } else {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }
}

function checkout() {
    const customMessage = messageInput ? messageInput.value.trim() : '';

    if (cart.length === 0 && !customMessage) {
        alert("Your cart is empty! Please add a bouquet or write a custom message.");
        return;
    }

    if (orderStatus) {
        orderStatus.classList.add('active', 'loading');
        orderStatus.classList.remove('success');
    }

    let message = "Hello The Secret Florist!\n\n";
    
    if (customMessage) {
        message += `*Custom Message/Request:* ${customMessage}\n\n`;
    }

    if (cart.length > 0) {
        message += "*Order Details:*\n";
        let total = 0;
        cart.forEach(entry => {
            const itemTotal = entry.product.price * entry.quantity;
            total += itemTotal;
            const imageUrl = new URL(entry.product.image, window.location.href).href;
            message += `- ${entry.product.name} (x${entry.quantity}) - INR ${itemTotal.toLocaleString('en-IN')}\n`;
            message += `  Preview: ${imageUrl}\n`;
        });

        message += `\n*Total Price: INR ${total.toLocaleString('en-IN')}*\n`;
    }

    message += "\nPlease confirm my order. Thank you!";

    const phoneNumber = "919994588076";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        if (orderStatus) {
            orderStatus.classList.remove("loading");
            orderStatus.classList.add("success");
        }
        window.open(whatsappUrl, '_blank');
        setTimeout(() => {
            if (orderStatus) {
                orderStatus.classList.remove("active", "success");
            }
        }, 1200);
    }, 1200);
}

// ================== PERFUME BOUQUET WHATSAPP ==================
function openPerfumeWhatsApp(productName, productImage) {
    const phoneNumber = "919994588076";
    // If the image path is relative, construct the full absolute URL so it creates a preview on WhatsApp
    const imageUrl = new URL(productImage, window.location.href).href;
    const message = `Hey The Secret Florist! 🌸 I need a customized perfume bouquet like the *"${productName}"* that I saw on your website.\n\nHere is the reference image: ${imageUrl}\n\nCould you please provide more details and pricing? Thank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function openPrebookWhatsApp(productName, productImage) {
    const phoneNumber = "919994588076";
    const imageUrl = new URL(productImage, window.location.href).href;
    const message = `Hey The Secret Florist! 🌸 I'm interested in pre-booking the rare *"${productName}"* bouquet (1 week in advance).\n\nHere is the reference image: ${imageUrl}\n\nCould you please confirm the availability and process for this? Thank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Close cart when clicking outside
if (cartOverlay) {
    cartOverlay.addEventListener('click', () => toggleCart(false));
}

// ================== HAMBURGER MENU ==================
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('.nav-links');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');
        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navLinks.classList.remove('mobile-open');
            document.body.style.overflow = '';
        });
    });
}

// ================== SMOOTH SCROLLING (LENIS) ==================
if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 0.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 3,
        smoothTouch: true,
        touchMultiplier: 4,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    lenis.scrollTo(targetElement);
                }
            }
        });
    });
} else {
    console.warn("Lenis library not loaded. Smooth scrolling disabled.");
}

// Ensure DOM is fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
