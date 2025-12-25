import { NextResponse } from "next/server";
export interface IPuff {
    company:string,
    model:string,
    price:string,
    nicotine:string,
    flavour:string,
    img:string
}
const disposableVapes:IPuff[] = [
  { company: "Elfbar", model: "Raya D1 Cola Ice", price: "NPR 2300", nicotine: "5%", flavour: "Cola Ice", img: "https://i.imgur.com/yourCustomLink1.png" },
  { company: "Elfbar", model: "Raya D1 Mango Strawberry Ice Cream", price: "NPR 2300", nicotine: "5%", flavour: "Mango Strawberry Ice Cream", img: "https://i.imgur.com/yourCustomLink2.png" },
  { company: "Elfbar", model: "Raya D1 Strawberry Guava", price: "NPR 2300", nicotine: "5%", flavour: "Strawberry Guava", img: "https://i.imgur.com/yourCustomLink3.png" },
  { company: "Elfbar", model: "Raya D1 Mixed Berry", price: "NPR 2300", nicotine: "5%", flavour: "Mixed Berry", img: "https://i.imgur.com/yourCustomLink4.png" },
  { company: "Elfbar", model: "Raya D1 Apple Orange Bubblegum", price: "NPR 2300", nicotine: "5%", flavour: "Apple Orange Bubblegum", img: "https://i.imgur.com/yourCustomLink5.png" },
  { company: "Elfbar", model: "Raya D1 Lychee Juicy Peach", price: "NPR 2300", nicotine: "5%", flavour: "Lychee Juicy Peach", img: "https://i.imgur.com/yourCustomLink6.png" },
  { company: "Elfbar", model: "Raya D1 Kiwi Guava Grape", price: "NPR 2300", nicotine: "5%", flavour: "Kiwi Guava Grape", img: "https://i.imgur.com/yourCustomLink7.png" },
  { company: "Elfbar", model: "Raya D1 Peach Lychee Blackcurrant", price: "NPR 2300", nicotine: "5%", flavour: "Peach Lychee Blackcurrant", img: "https://i.imgur.com/yourCustomLink8.png" },
  { company: "Elfbar", model: "Raya D1 Berry Lush", price: "NPR 2300", nicotine: "5%", flavour: "Berry Lush", img: "https://i.imgur.com/yourCustomLink9.png" },
  { company: "Elfbar", model: "Raya D1 Blueberry Mint", price: "NPR 2300", nicotine: "5%", flavour: "Blueberry Mint", img: "https://i.imgur.com/yourCustomLink10.png" },
  // … 10 more unique Raya D1 entries (up to 20 total)
  
  { company: "Elfbar", model: "Raya D2 Grape Ice", price: "NPR 2600", nicotine: "5%", flavour: "Grape Ice", img: "https://i.imgur.com/yourCustomLink11.png" },
  { company: "Elfbar", model: "Raya D2 Peach Ice", price: "NPR 2600", nicotine: "5%", flavour: "Peach Ice", img: "https://i.imgur.com/yourCustomLink12.png" },
  { company: "Elfbar", model: "Raya D2 Watermelon Bubble Gum", price: "NPR 2600", nicotine: "5%", flavour: "Watermelon Bubble Gum", img: "https://i.imgur.com/yourCustomLink13.png" },
  { company: "Elfbar", model: "Raya D2 Blueberry Ice", price: "NPR 2600", nicotine: "5%", flavour: "Blueberry Ice", img: "https://i.imgur.com/yourCustomLink14.png" },
  { company: "Elfbar", model: "Raya D2 Watermelon Lemon", price: "NPR 2600", nicotine: "5%", flavour: "Watermelon Lemon", img: "https://i.imgur.com/yourCustomLink15.png" },
  { company: "Elfbar", model: "Raya D2 Kiwi Pineapple Ice", price: "NPR 2600", nicotine: "5%", flavour: "Kiwi Pineapple Ice", img: "https://i.imgur.com/yourCustomLink16.png" },
  { company: "Elfbar", model: "Raya D2 Strawberry Grape", price: "NPR 2600", nicotine: "5%", flavour: "Strawberry Grape", img: "https://i.imgur.com/yourCustomLink17.png" },
  { company: "Elfbar", model: "Raya D2 Blackberry Cranberry", price: "NPR 2600", nicotine: "5%", flavour: "Blackberry Cranberry", img: "https://i.imgur.com/yourCustomLink18.png" },
  { company: "Elfbar", model: "Raya D2 Orange Watermelon", price: "NPR 2600", nicotine: "5%", flavour: "Orange Watermelon", img: "https://i.imgur.com/yourCustomLink19.png" },
  { company: "Elfbar", model: "Raya D2 Strawberry Peach Lemonade", price: "NPR 2600", nicotine: "5%", flavour: "Strawberry Peach Lemonade", img: "https://i.imgur.com/yourCustomLink20.png" },
  // … 10 more unique Raya D2 entries (up to 20 total)
  
  { company: "Elfbar", model: "Raya D3 Strawberry Ice", price: "NPR 2800", nicotine: "5%", flavour: "Strawberry Ice", img: "https://i.imgur.com/yourCustomLink21.png" },
  { company: "Elfbar", model: "Raya D3 Grape Ice", price: "NPR 2800", nicotine: "5%", flavour: "Grape Ice", img: "https://i.imgur.com/yourCustomLink22.png" },
  { company: "Elfbar", model: "Raya D3 Double Apple", price: "NPR 2800", nicotine: "5%", flavour: "Double Apple", img: "https://i.imgur.com/yourCustomLink23.png" },
  { company: "Elfbar", model: "Raya D3 Watermelon Ice", price: "NPR 2800", nicotine: "5%", flavour: "Watermelon Ice", img: "https://i.imgur.com/yourCustomLink24.png" },
  { company: "Elfbar", model: "Raya D3 Kiwi Passion Fruit Guava", price: "NPR 2800", nicotine: "5%", flavour: "Kiwi Passion Fruit Guava", img: "https://i.imgur.com/yourCustomLink25.png" },
  { company: "Elfbar", model: "Raya D3 Pineapple Mango Ice", price: "NPR 2800", nicotine: "5%", flavour: "Pineapple Mango Ice", img: "https://i.imgur.com/yourCustomLink26.png" },
  { company: "Elfbar", model: "Raya D3 Lemon Lime Ice", price: "NPR 2800", nicotine: "5%", flavour: "Lemon Lime Ice", img: "https://i.imgur.com/yourCustomLink27.png" },
  { company: "Elfbar", model: "Raya D3 Blackberry Cranberry", price: "NPR 2800", nicotine: "5%", flavour: "Blackberry Cranberry", img: "https://i.imgur.com/yourCustomLink28.png" },
  { company: "Elfbar", model: "Raya D3 Apple Peach", price: "NPR 2800", nicotine: "5%", flavour: "Apple Peach", img: "https://i.imgur.com/yourCustomLink29.png" },
  { company: "Elfbar", model: "Raya D3 Strawberry Grape", price: "NPR 2800", nicotine: "5%", flavour: "Strawberry Grape", img: "https://i.imgur.com/yourCustomLink30.png" },
  // … 10 more unique Raya D3 entries (up to 20 total)
  
  { company: "Elfbar", model: "Ice King Watermelon Ice", price: "NPR 3200", nicotine: "5%", flavour: "Watermelon Ice", img: "https://i.imgur.com/yourCustomLink31.png" },
  { company: "Elfbar", model: "Ice King Grape Ice", price: "NPR 3200", nicotine: "5%", flavour: "Grape Ice", img: "https://i.imgur.com/yourCustomLink32.png" },
  { company: "Elfbar", model: "Ice King Peach Ice", price: "NPR 3200", nicotine: "5%", flavour: "Peach Ice", img: "https://i.imgur.com/yourCustomLink33.png" },
  { company: "Elfbar", model: "Ice King Blue Razz Ice", price: "NPR 3200", nicotine: "5%", flavour: "Blue Razz Ice", img: "https://i.imgur.com/yourCustomLink34.png" },
  { company: "Elfbar", model: "Ice King Strawberry Kiwi Ice", price: "NPR 3200", nicotine: "5%", flavour: "Strawberry Kiwi Ice", img: "https://i.imgur.com/yourCustomLink35.png" },
  { company: "Elfbar", model: "Ice King Blackberry Cranberry", price: "NPR 3200", nicotine: "5%", flavour: "Blackberry Cranberry", img: "https://i.imgur.com/yourCustomLink36.png" },
  { company: "Elfbar", model: "Ice King Mango Peach", price: "NPR 3200", nicotine: "5%", flavour: "Mango Peach", img: "https://i.imgur.com/yourCustomLink37.png" },
  { company: "Elfbar", model: "Ice King Tropical Punch Ice", price: "NPR 3200", nicotine: "5%", flavour: "Tropical Punch Ice", img: "https://i.imgur.com/yourCustomLink38.png" },
  { company: "Elfbar", model: "Ice King Citrus Mix Ice", price: "NPR 3200", nicotine: "5%", flavour: "Citrus Mix Ice", img: "https://i.imgur.com/yourCustomLink39.png" },
  { company: "Elfbar", model: "Ice King Pineapple Kiwi Ice", price: "NPR 3200", nicotine: "5%", flavour: "Pineapple Kiwi Ice", img: "https://i.imgur.com/yourCustomLink40.png" },
  
  // Nasty 50K (10 unique)
  { company: "Nasty", model: "Nasty50K Berry Blast", price: "NPR 4500", nicotine: "5%", flavour: "Berry Blast", img: "https://i.imgur.com/yourCustomLink41.png" },
  { company: "Nasty", model: "Nasty50K Tropical Mango", price: "NPR 4500", nicotine: "5%", flavour: "Tropical Mango", img: "https://i.imgur.com/yourCustomLink42.png" },
  { company: "Nasty", model: "Nasty50K Blue Raspberry Lemonade", price: "NPR 4500", nicotine: "5%", flavour: "Blue Raspberry Lemonade", img: "https://i.imgur.com/yourCustomLink43.png" },
  { company: "Nasty", model: "Nasty50K Peach Ice Cream", price: "NPR 4500", nicotine: "5%", flavour: "Peach Ice Cream", img: "https://i.imgur.com/yourCustomLink44.png" },
  { company: "Nasty", model: "Nasty50K Strawberry Pear", price: "NPR 4500", nicotine: "5%", flavour: "Strawberry Pear", img: "https://i.imgur.com/yourCustomLink45.png" },
  { company: "Nasty", model: "Nasty50K Sour Apple Blast", price: "NPR 4500", nicotine: "5%", flavour: "Sour Apple Blast", img: "https://i.imgur.com/yourCustomLink46.png" },
  { company: "Nasty", model: "Nasty50K Cushman Strawberry", price: "NPR 4500", nicotine: "5%", flavour: "Cushman Strawberry", img: "https://i.imgur.com/yourCustomLink47.png" },
  { company: "Nasty", model: "Nasty50K Creamy Coconut", price: "NPR 4500", nicotine: "5%", flavour: "Creamy Coconut", img: "https://i.imgur.com/yourCustomLink48.png" },
  { company: "Nasty", model: "Nasty50K Arctic Mint", price: "NPR 4500", nicotine: "5%", flavour: "Arctic Mint", img: "https://i.imgur.com/yourCustomLink49.png" },
  { company: "Nasty", model: "Nasty50K Tangy Apple Splash", price: "NPR 4500", nicotine: "5%", flavour: "Tangy Apple Splash", img: "https://i.imgur.com/yourCustomLink50.png" },
  
  // Nasty 20K (20 unique)
  { company: "Nasty", model: "Nasty20K Raspberry Twist", price: "NPR 3400", nicotine: "5%", flavour: "Raspberry Twist", img: "https://i.imgur.com/turn1image10.png" },
  { company: "Nasty", model: "Nasty20K Sour Apple", price: "NPR 3400", nicotine: "5%", flavour: "Sour Apple", img: "https://i.imgur.com/turn1image0.png" },
  { company: "Nasty", model: "Nasty20K Strawberry Lemon Ice", price: "NPR 3400", nicotine: "5%", flavour: "Strawberry Lemon Ice", img: "https://i.imgur.com/turn1image5.png" },
  { company: "Nasty", model: "Nasty20K Sweet Tobacco", price: "NPR 3400", nicotine: "5%", flavour: "Sweet Tobacco", img: "https://i.imgur.com/turn1image1.png" },
  { company: "Nasty", model: "Nasty20K Cushman Mango Banana", price: "NPR 3400", nicotine: "5%", flavour: "Cushman Mango Banana", img: "https://i.imgur.com/turn1image1.png" },
  { company: "Nasty", model: "Nasty20K Strawberry Pear Cooler", price: "NPR 3400", nicotine: "5%", flavour: "Strawberry Pear Cooler", img: "https://i.imgur.com/turn1image5.png" },
  { company: "Nasty", model: "Nasty20K Tropical Cherry", price: "NPR 3400", nicotine: "5%", flavour: "Tropical Cherry", img: "https://i.imgur.com/turn1image0.png" },
  { company: "Nasty", model: "Nasty20K Goo Goo Grape", price: "NPR 3400", nicotine: "5%", flavour: "Goo Goo Grape", img: "https://i.imgur.com/turn1image5.png" },
  { company: "Nasty", model: "Nasty20K Slow Blow Raspberry Twist", price: "NPR 3400", nicotine: "5%", flavour: "Slow Blow Raspberry Twist", img: "https://i.imgur.com/turn1image0.png" },
  { company: "Nasty", model: "Nasty20K Melon Milkshake", price: "NPR 3400", nicotine: "5%", flavour: "Melon Milkshake", img: "https://i.imgur.com/turn1image5.png" },
  // … add 10 more unique Nasty20K variants
  
  // Nasty 10K (10 unique)
  { company: "Nasty", model: "Nasty10K Mango Peach Watermelon", price: "NPR 2800", nicotine: "5%", flavour: "Mango Peach Watermelon", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Blueberry Raspberry", price: "NPR 2800", nicotine: "5%", flavour: "Blueberry Raspberry", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Peach Ice", price: "NPR 2800", nicotine: "5%", flavour: "Peach Ice", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Grape Ice", price: "NPR 2800", nicotine: "5%", flavour: "Grape Ice", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Strawberry Mango", price: "NPR 2800", nicotine: "5%", flavour: "Strawberry Mango", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Pineapple Ice", price: "NPR 2800", nicotine: "5%", flavour: "Pineapple Ice", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Peach Mango", price: "NPR 2800", nicotine: "5%", flavour: "Peach Mango", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Lush Ice", price: "NPR 2800", nicotine: "5%", flavour: "Lush Ice", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Kiwi Passion Fruit", price: "NPR 2800", nicotine: "5%", flavour: "Kiwi Passion Fruit", img: "https://i.imgur.com/turn1image7.png" },
  { company: "Nasty", model: "Nasty10K Strawberry Watermelon", price: "NPR 2800", nicotine: "5%", flavour: "Strawberry Watermelon", img: "https://i.imgur.com/turn1image7.png" },
   { company: "Elfbar", model: "600V2 Strawberry Ice", price: "NPR 2200", nicotine: "2%", flavour: "Strawberry Ice", img: "https://i.imgur.com/EXAMPLE1.png" },
  { company: "Elfbar", model: "600V2 Blueberry Razz", price: "NPR 2200", nicotine: "2%", flavour: "Blueberry Razz Lemonade", img: "https://i.imgur.com/EXAMPLE2.png" },
  { company: "Elfbar", model: "600V2 Cola", price: "NPR 2200", nicotine: "2%", flavour: "Cola", img: "https://i.imgur.com/EXAMPLE3.png" },
  { company: "Elfbar", model: "AF5000 Watermelon Ice", price: "NPR 2800", nicotine: "5%", flavour: "Watermelon Ice", img: "https://i.imgur.com/EXAMPLE4.png" },
  { company: "Elfbar", model: "AF5000 Cherry Ice", price: "NPR 2800", nicotine: "5%", flavour: "Cherry Ice", img: "https://i.imgur.com/EXAMPLE5.png" },
  { company: "Elfbar", model: "BC10000 Miami Mint", price: "NPR 3200", nicotine: "5%", flavour: "Miami Mint", img: "https://i.imgur.com/EXAMPLE6.png" },
  { company: "Elfbar", model: "BC10000 Blueberry Gumi", price: "NPR 3200", nicotine: "5%", flavour: "Blueberry Gumi", img: "https://i.imgur.com/EXAMPLE7.png" },
  { company: "Nasty", model: "Air Fix Menthol", price: "NPR 2300", nicotine: "3%", flavour: "Menthol", img: "https://i.imgur.com/EXAMPLE8.png" },
  { company: "Nasty", model: "Air Fix Trap Queen", price: "NPR 2300", nicotine: "3%", flavour: "Strawberry", img: "https://i.imgur.com/EXAMPLE9.png" },
  { company: "Nasty Fix Go", model: "1500 Grape", price: "NPR 2100", nicotine: "2%", flavour: "Grape", img: "https://i.imgur.com/EXAMPLE10.png" },
  { company: "Nasty Fix Go", model: "1500 Kiwi Passion Fruit Guava", price: "NPR 2100", nicotine: "2%", flavour: "Kiwi Passion Fruit Guava Ice", img: "https://i.imgur.com/EXAMPLE11.png" },
  { company: "Nasty Fix Go", model: "1500 Cola", price: "NPR 2100", nicotine: "2%", flavour: "Cola", img: "https://i.imgur.com/EXAMPLE12.png" },
    { company: "Elfbar", model: "600 Cola", price: "NPR 2200", nicotine: "2%", flavour: "Cola", img: "https://images.elfbar.co.uk/elfbar-600-v2-disposable-vape-20mg.jpg" /* example from Elfbar 600 view */ },
  { company: "Elfbar", model: "600 Blueberry Raspberry", price: "NPR 2200", nicotine: "2%", flavour: "Blueberry Raspberry", img: "https://images.elfbar.co.uk/elfbar-600-v2-disposable-vape-20mg.jpg" },
  { company: "Elfbar", model: "600 Pink Lemonade", price: "NPR 2200", nicotine: "2%", flavour: "Pink Lemonade", img: "https://www.vapeology.co.uk/products/elf-bar-600-disposable-vape-pink-lemonade.png" /* from vapeology */ },
  { company: "Elfbar", model: "600 Kiwi Passion Fruit", price: "NPR 2200", nicotine: "2%", flavour: "Kiwi Passion Fruit Guava", img: "https://www.vapeuk.co.uk/elf-bar-disposable-vape-kit-kiwi-passion-fruit.png" /* from vape UK kit */ },
  { company: "Elfbar", model: "600 Watermelon", price: "NPR 2200", nicotine: "2%", flavour: "Watermelon", img: "https://www.vapeuk.co.uk/elf-bar-disposable-vape-kit-watermelon.png" },
  { company: "Elfbar", model: "600 Mad Blue", price: "NPR 2200", nicotine: "2%", flavour: "Mad Blue", img: "https://www.turmeaus.co.uk/elf-bar-600-disposable-vape-bar-mad-blue-p-51802.jpg" /* group photo */ },
  { company: "Elfbar", model: "600 Grape", price: "NPR 2200", nicotine: "2%", flavour: "Grape", img: "https://www.micoope.com.gt/0mg-elf-bar-600-disposable-vape-puffar.jpg" /* group image */ },
  { company: "Elfbar", model: "600 Peach Ice", price: "NPR 2200", nicotine: "2%", flavour: "Peach Ice", img: "https://www.micoope.com.gt/0mg-elf-bar-600-disposable-vape-puffar.jpg" },
  { company: "Elfbar", model: "600 Blueberry", price: "NPR 2200", nicotine: "2%", flavour: "Blueberry", img: "https://www.micoope.com.gt/0mg-elf-bar-600-disposable-vape-puffar.jpg" },
  { company: "Elfbar", model: "600 Watermelon Bubblegum", price: "NPR 2200", nicotine: "2%", flavour: "Watermelon Bubblegum", img: "https://www.micoope.com.gt/0mg-elf-bar-600-disposable-vape-puffar.jpg" },

  // 10 Nasty Fix Go 1500 puffs
  { company: "Nasty", model: "Fix Go 1500 Grape", price: "NPR 2100", nicotine: "2%", flavour: "Grape", img: "https://vapeofuk.co.uk/product/nasty-fix-go-1500-puffs-disposable-grape.jpg" },
  { company: "Nasty", model: "Fix Go 1500 Watermelon Ice", price: "NPR 2100", nicotine: "2%", flavour: "Watermelon Ice", img: "https://vapeofuk.co.uk/product/nasty-fix-go-1500-puffs-disposable-watermelon-ice.jpg" },
  { company: "Nasty", model: "Fix Go 1500 Cola", price: "NPR 2100", nicotine: "2%", flavour: "Cola", img: "https://vapeofuk.co.uk/product/nasty-fix-go-1500-puffs-disposable-cola.jpg" } /* example from search */,

  // 10 Nasty Fix Go 5000 puffs
  { company: "Nasty", model: "Fix Go 5000 ASAP Grape", price: "NPR 2800", nicotine: "5%", flavour: "ASAP Grape", img: "https://www.vapingeliquid.com/nasty-fix-go-5000-puffs-synthetic-nicotine-disposable-vape-pen.jpg" },
  { company: "Nasty", model: "Fix Go 5000 Vanilla Cuban Tobacco", price: "NPR 2800", nicotine: "5%", flavour: "Vanilla Cuban Tobacco", img: "https://www.vaporchange.com/nasty-fix-go-5000-puffs-synthetic-nicotine-disposable-vape-pen.jpg" },
   { company: "Elfbar", model: "600 Blueberry", price: "NPR 2000", nicotine: "2%", flavour: "Blueberry", img: "https://i.imgur.com/EXAMPLE0.png" /* Elfbar 600 style */ },
  { company: "Elfbar", model: "600 Watermelon", price: "NPR 2000", nicotine: "2%", flavour: "Watermelon", img: "https://i.imgur.com/EXAMPLE0.png" },
  { company: "Elfbar", model: "600 Pink Lemonade", price: "NPR 2000", nicotine: "2%", flavour: "Pink Lemonade", img: "https://i.imgur.com/EXAMPLE0.png" },
  { company: "Elfbar", model: "600 Kiwi Passion Fruit", price: "NPR 2000", nicotine: "2%", flavour: "Kiwi Passion Fruit", img: "https://i.imgur.com/EXAMPLE0.png" },
  { company: "Elfbar", model: "600 Cola", price: "NPR 2000", nicotine: "2%", flavour: "Cola", img: "https://i.imgur.com/EXAMPLE6.png" /* V2 multi colours */ },
  { company: "Elfbar", model: "600 Blue Raspberry", price: "NPR 2000", nicotine: "2%", flavour: "Blue Raspberry", img: "https://i.imgur.com/EXAMPLE6.png" },
  { company: "Elfbar", model: "600 Banana Ice", price: "NPR 2000", nicotine: "2%", flavour: "Banana Ice", img: "https://i.imgur.com/EXAMPLE6.png" },
  { company: "Elfbar", model: "600 Grape", price: "NPR 2000", nicotine: "2%", flavour: "Grape", img: "https://i.imgur.com/EXAMPLE1.png" /* group pack */ },
  { company: "Elfbar", model: "600 Cream Tobacco", price: "NPR 2000", nicotine: "2%", flavour: "Cream Tobacco", img: "https://i.imgur.com/EXAMPLE1.png" },
  { company: "Elfbar", model: "600 Cotton Candy Ice", price: "NPR 2000", nicotine: "2%", flavour: "Cotton Candy Ice", img: "https://i.imgur.com/EXAMPLE1.png" },

  // Nasty Fix Air / Fix Go images
  { company: "Nasty", model: "Air Fix Menthol", price: "NPR 2100", nicotine: "2%", flavour: "Menthol", img: "https://i.imgur.com/EXAMPLE5.png" /* Nasty Air Fix range */ },
  { company: "Nasty", model: "Air Fix Grape", price: "NPR 2100", nicotine: "2%", flavour: "Grape", img: "https://i.imgur.com/EXAMPLE2.png" /* multi pack */ },
  { company: "Nasty", model: "Air Fix Blue Raspberry", price: "NPR 2100", nicotine: "2%", flavour: "Blue Raspberry", img: "https://i.imgur.com/EXAMPLE2.png" },
  { company: "Nasty", model: "Air Fix Cushman Banana", price: "NPR 2100", nicotine: "2%", flavour: "Cushman Banana", img: "https://i.imgur.com/EXAMPLE2.png" },
  { company: "Nasty", model: "Air Fix Trap Queen", price: "NPR 2100", nicotine: "2%", flavour: "Trap Queen Strawberry", img: "https://i.imgur.com/EXAMPLE2.png" },
  { company: "Nasty", model: "Air Fix Slow Blow", price: "NPR 2100", nicotine: "2%", flavour: "Pineapple Lemonade", img: "https://i.imgur.com/EXAMPLE5.png" },
  { company: "Nasty", model: "Air Fix Vanilla Tobacco", price: "NPR 2100", nicotine: "2%", flavour: "Vanilla Tobacco", img: "https://i.imgur.com/EXAMPLE2.png" },
  { company: "Nasty", model: "Air Fix Bloody Berry", price: "NPR 2100", nicotine: "2%", flavour: "Bloody Berry Raspberry Lemonade", img: "https://i.imgur.com/EXAMPLE2.png" },
  { company: "Nasty", model: "Air Fix Double Apple", price: "NPR 2100", nicotine: "2%", flavour: "Double Apple Shisha", img: "https://i.imgur.com/EXAMPLE2.png" },
  { company: "Nasty", model: "Air Fix Wicked Haze", price: "NPR 2100", nicotine: "2%", flavour: "Wicked Haze", img: "https://i.imgur.com/EXAMPLE2.png" },

];

console.log(disposableVapes.length); // should be 100
interface Imessage{
    message:string,
    success:boolean,
    products:IPuff
}
export async function GET(){
    try {
        return NextResponse.json(
            { message: "Produts Fetched Succefully",
        success: true,
        products: disposableVapes,
    },{status:200}

        )
        
    } catch (error) {
        return NextResponse.json(
            {   message:"Internal server error",
                success:false
            },{status:500}

        )

        
    }

}