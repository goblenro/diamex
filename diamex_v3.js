
 const products = [
 
 
 
{name: "Biostop", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Anti paraziți", "Blană scurtă", "Blană lungă", "Cățeluși", "Blană albă", "Blană neagră", "Blană colorată"], 									image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-BIOSTOP.webp", 					link: "https://www.diamex.ro/produs/sampon-biostop/", priceCurrency: "EUR",  offers: [    {      price: "10",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-biostop/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Dimecon", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Anti paraziți", "Blană scurtă", "Blană lungă", "Cățeluși", "Blană albă", "Blană neagră", "Blană colorată"], 									image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-DIMECON.webp", 					link: "https://www.diamex.ro/produs/sampon-repelent-dimecon/", priceCurrency: "EUR",  offers: [    {      price: "10",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-repelent-dimecon/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Universal Fruits", 				type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană scurtă", "Blană colorată"], 																												image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-UNIVERSALFRUITS.webp", 			link: "https://www.diamex.ro/produs/sampon-universal-fruits/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-universal-fruits/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Volume Boost", 					type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Volumizare", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], 													image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-VOLUMEBOOST.webp", 				link: "https://www.diamex.ro/produs/sampon-volume-boost/", priceCurrency: "EUR",  offers: [    {      price: "9",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-volume-boost/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Puppy", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Cățeluși", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], 														image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-PUPPY.webp", 					link: "https://www.diamex.ro/produs/sampon-puppy/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-puppy/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Bubble Gum", 					type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană scurtă", "Blană colorată", "Blană albă", "Blană neagră"], 																				image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamex_bubble_gum.webp", 						link: "https://www.diamex.ro/produs/sampon-bubble-gum/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-bubble-gum/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Cuberdon", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană scurtă", "Blană colorată", "Blană albă", "Blană neagră"], 																				image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-CUBERDON.webp", 					link: "https://www.diamex.ro/produs/sampon-cuberdon/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-cuberdon/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Super White", 					type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană albă", "Blană scurtă", "Blană lungă"], 																									image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamex_super_white.webp", 						link: "https://www.diamex.ro/produs/sampon-super-white/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-super-white/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Easy White", 					type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană albă", "Blană scurtă", "Blană lungă"], 																									image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamex_easy_white.webp", 						link: "https://www.diamex.ro/produs/sampon-easy-white/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-easy-white/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Revital Groom", 				type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană deteriorată", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], 															image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-REVITALGROOM.webp", 				link: "https://www.diamex.ro/produs/sampon-revital-groom/", priceCurrency: "EUR",  offers: [    {      price: "9",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-revital-groom/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Universal Chevrefeuille", 		type: "Șampon", sizes: [ "1L", "5L", "25L"], 			features: ["Blană scurtă", "Blană colorată"], 																												image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-UNIVERSALCHEVREFEUILLE.webp", 	link: "https://www.diamex.ro/produs/sampon-universal-chevrefeuille/", priceCurrency: "EUR",  offers: [    {      price: "14",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-universal-chevrefeuille/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Apple", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Extra strălucire", "Blană scurtă", "Blană albă", "Blană neagră", "Blană colorată"], 																				image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamex_apple.webp", 							link: "https://www.diamex.ro/produs/sampon-apple/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-apple/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Aloe Vera", 					type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană deteriorată", "Piele sensibilă", "Anti mătreață", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"],			image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-ALOEVERA.webp", 					link: "https://www.diamex.ro/produs/sampon-aloe-vera/", priceCurrency: "EUR",  offers: [    {      price: "10",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-aloe-vera/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Diano Special", 				type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană încâlcită", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], 																image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-DIANOSPECIAL.webp", 				link: "https://www.diamex.ro/produs/sampon-diano-special/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-diano-special/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Argan", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană încâlcită", "Blană deteriorată", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], 											image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-ARGAN.webp", 					link: "https://www.diamex.ro/produs/sampon-argan/", priceCurrency: "EUR",  offers: [    {      price: "10",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-argan/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Summer", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Piele sensibilă", "Blană scurtă", "Blană albă", "Blană neagră", "Blană colorată"], 																				image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-SUMMER.webp", 					link: "https://www.diamex.ro/produs/sampon-summer/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-summer/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Terrier", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană sârmoasă", "Blană scurtă", "Blană albă", "Blană neagră", "Blană colorată"], 																image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-TERRIER.webp", 					link: "https://www.diamex.ro/produs/sampon-terrier/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-terrier/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Delicat", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Piele sensibilă", "Anti mătreață", "Blană sârmoasă", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], 			image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-DELICAT.webp", 					link: "https://www.diamex.ro/produs/sampon-delicat/", priceCurrency: "EUR",  offers: [    {      price: "9",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-delicat/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Texture", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană lungă", "Blană colorată", "Blană albă", "Blană neagră"], 																					image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-TEXTURE.webp", 					link: "https://www.diamex.ro/produs/sampon-texture/", priceCurrency: "EUR",  offers: [    {      price: "10",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-texture/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Coco", 							type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană lungă", "Blană colorată", "Blană albă", "Blană neagră"], 																	image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamex_coco.webp", 								link: "https://www.diamex.ro/produs/sampon-coco/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-coco/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Super Black", 					type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană neagră", "Blană scurtă", "Blană lungă"], 																									image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamex_super_black.webp", 						link: "https://www.diamex.ro/produs/sampon-super-black/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-super-black/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Goudron", 						type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Anti mătreață", "Anti paraziți", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], 								image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-GOUDRON.webp", 					link: "https://www.diamex.ro/produs/sampon-goudron/", priceCurrency: "EUR",  offers: [    {      price: "8",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-goudron/",      seller: "Laboratoire Diamex"    }  ]},
{name: "Mister Fresh", 					type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], 	features: ["Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], 																	image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX_SHAMPOO_MISTER_FRESH.webp", 				link: "https://www.diamex.ro/produs/sampon-mister-fresh/", priceCurrency: "EUR",  offers: [    {      price: "10",      priceCurrency: "EUR",      availability: "InStock",                   url: "https://www.diamex.ro/produs/sampon-mister-fresh/",      seller: "Laboratoire Diamex"    }  ]},


  {name: "Jojoba", type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], features: ["Blană încâlcită", "Piele sensibilă", "Extra strălucire", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-JOJOBA.webp", link: "https://www.diamex.ro/produs/sampon-jojoba/", priceCurrency: "EUR", offers: [ { price: "8", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-jojoba/", seller: "Laboratoire Diamex" } ]},
  {name: "Lait d'amandes", type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], features: ["Extra strălucire", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-LAITD_AMANDES.webp", link: "https://www.diamex.ro/produs/sampon-lait-damandes/", priceCurrency: "EUR", offers: [ { price: "8", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-lait-damandes/", seller: "Laboratoire Diamex" } ]},
  {name: "Provencal Honey/Miel", type: "Șampon", sizes: ["200ml", "1L", "5L", "25L"], features: ["Blană deteriorată", "Piele sensibilă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PROVENCAL-MIELSHAMPOO.webp", link: "https://www.diamex.ro/produs/sampon-provencal-honey/", priceCurrency: "EUR", offers: [ { price: "11", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-provencal-honey/", seller: "Laboratoire Diamex" } ]},
  {name: "Provencal Lavende", type: "Șampon", sizes: ["200ml", "1L", "5L", "25L"], features: ["Blană scurtă", "Blană lungă", "Blană albă", "Anti paraziți", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PROVENCAL-LAVANDESHAMPOO.webp", link: "https://www.diamex.ro/produs/sampon-provencal-lavender/", priceCurrency: "EUR", offers: [ { price: "11", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-provencal-lavender/", seller: "Laboratoire Diamex" } ]},
  {name: "Provencal Thyme-Romarin", type: "Șampon", sizes: ["200ml", "1L", "5L", "25L"], features: ["Blană scurtă", "Volumizare", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PROVENCAL-THYMROMARINSHAMPOO.webp", link: "https://www.diamex.ro/produs/sampon-provencal-thyme-romarin/", priceCurrency: "EUR", offers: [ { price: "11", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-provencal-thyme-romarin/", seller: "Laboratoire Diamex" } ]},
  {name: "Therapy", type: "Șampon", sizes: ["250ml", "1L", "5L", "25L"], features: ["Anti căderea părului", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-THERAPY.webp", link: "https://www.diamex.ro/produs/sampon-therapy/", priceCurrency: "EUR", offers: [ { price: "10", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-therapy/", seller: "Laboratoire Diamex" } ]},
  {name: "Dry Lotion", type: "Șampon", sizes: ["200ml", "1L", "5L"], features: ["Curățare uscată", "Blană sârmoasă", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată", "Cățeluși"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-DRYLOTION.webp", link: "https://www.diamex.ro/produs/sampon-dry-lotion-curatare-fara-clatire/", priceCurrency: "EUR", offers: [ { price: "11", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-dry-lotion-curatare-fara-clatire/", seller: "Laboratoire Diamex" } ]},
  {name: "Clean face and body", type: "Șampon", sizes: ["500ml", "5L"], features: ["Piele sensibilă", "Cățeluși", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexCleanFaceAndBodysampon5lt.webp", link: "https://www.diamex.ro/produs/sampon-clean-face-and-body/", priceCurrency: "EUR", offers: [ { price: "19", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-clean-face-and-body/", seller: "Laboratoire Diamex" } ]},
  {name: "Professionnel Ocean", type: "Șampon", sizes: ["5L", "20L"], features: ["Blană scurtă", "Blană albă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexProfessionalOceanshampoo.webp", link: "https://www.diamex.ro/produs/sampon-professional-ocean/", priceCurrency: "EUR", offers: [ { price: "30", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-professional-ocean/", seller: "Laboratoire Diamex" } ]},
  {name: "Professionnel Amande", type: "Șampon", sizes: ["5L", "20L"], features: ["Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/amandesprofessionaldiamex.webp", link: "https://www.diamex.ro/produs/sampon-professional-almond-amandes/", priceCurrency: "EUR", offers: [ { price: "30", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-professional-almond-amandes/", seller: "Laboratoire Diamex" } ]},
  {name: "First Deep Cleaning", type: "Șampon", sizes: ["1L", "5L"], features: ["Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX_FDC.webp", link: "https://www.diamex.ro/produs/sampon-first-deep-cleaning/", priceCurrency: "EUR", offers: [ { price: "20", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-first-deep-cleaning/", seller: "Laboratoire Diamex" } ]},
  {name: "ShedControl", type: "Șampon", sizes: ["1L", "5L"], features: ["Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată", "Anti căderea părului"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-SHAMPOO-SHEDCONTROL.webp", link: "https://www.diamex.ro/produs/sampon-shed-control/", priceCurrency: "EUR", offers: [ { price: "26", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-shed-control/", seller: "Laboratoire Diamex" } ]},
  {name: "Tahiti Dog", type: "Șampon", sizes: ["250ml", "1L", "5L"], features: ["Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamex_tahiti_sampon.webp", link: "https://www.diamex.ro/produs/sampon-tahiti-dog/", priceCurrency: "EUR", offers: [ { price: "10", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-tahiti-dog/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Moisturizing & Repairing", type: "Șampon", sizes: ["300ml", "1L", "5L"], features: ["Extra strălucire", "Blană lungă", "Volumizare", "Anti căderea părului", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PURE-MOISTERIZING_REPAIRINGSHAMPOO.webp", link: "https://www.diamex.ro/produs/sampon-pure-moisturizing-repairing/", priceCurrency: "EUR", offers: [ { price: "19", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-pure-moisturizing-repairing/", seller: "Laboratoire Diamex" } ]},
  {name: "Mineral professional", type: "Șampon", sizes: ["250ml", "1L", "5L"], features: ["Blană încâlcită", "Blană deteriorată", "Anti căderea părului", "Volumizare", "Blană albă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-MINERAL-SHAMPOO.webp", link: "https://www.diamex.ro/produs/sampon-mineral/", priceCurrency: "EUR", offers: [ { price: "17", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-mineral/", seller: "Laboratoire Diamex" } ]},
  {name: "BIO-TECHNIC Soothing", type: "Șampon", sizes: ["200ml", "1L", "5L"], features: ["Piele sensibilă", "Blană deteriorată", "Anti căderea părului", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-BIO-TECHNIC-APAISANT.fw.webp", link: "https://www.diamex.ro/produs/sampon-bio-technic-apaisant-soothing/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-bio-technic-apaisant-soothing/", seller: "Laboratoire Diamex" } ]},
  {name: "BIO-TECHNIC Mild", type: "Șampon", sizes: ["200ml", "1L", "5L"], features: ["Piele sensibilă", "Blană deteriorată", "Anti căderea părului", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexBIO-TECHNICDouxMildsampon.fw.webp", link: "https://www.diamex.ro/produs/sampon-bio-technic-doux/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-bio-technic-doux/", seller: "Laboratoire Diamex" } ]},
  {name: "BIO-TECHNIC Color Enhancing", type: "Șampon", sizes: ["200ml", "1L", "5L"], features: ["Blană colorată","Extra strălucire", "Blană deteriorată", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-BIO-TECHNIC-RAVIVEURDECOULEUR.fw.webp", link: "https://www.diamex.ro/produs/sampon-bio-technic-color-enhancing-raviveur-de-couleur/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-bio-technic-color-enhancing-raviveur-de-couleur/", seller: "Laboratoire Diamex" } ]},
  {name: "BIO-TECHNIC Anti Hair Loss", type: "Șampon", sizes: ["200ml", "1L", "5L"], features: ["Anti căderea părului", "Blană deteriorată", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX - BIO-TECHNIC - ANTI-CHUTE.webp", link: "https://www.diamex.ro/produs/sampon-bio-technic-impotriva-caderii-parului/", priceCurrency: "EUR", offers: [ { price: "16", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-bio-technic-impotriva-caderii-parului/", seller: "Laboratoire Diamex" } ]},
  {name: "Balsam", type: "Balsam", sizes: ["250ml", "1L", "5L", "25L"], features: ["Blană încâlcită", "Blană deteriorată", "Volumizare", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamexbalsam.webp", link: "https://www.diamex.ro/produs/diamex-balsam/", priceCurrency: "EUR", offers: [ { price: "8", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-balsam/", seller: "Laboratoire Diamex" } ]},
  {name: "Oleogine", type: "Balsam", sizes: ["250ml", "1L", "5L", "25L"], features: ["Blană încâlcită", "Blană deteriorată", "Volumizare", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-BALSAM-OLEOGINE.webp", link: "https://www.diamex.ro/produs/balsam-oleogin/", priceCurrency: "EUR", offers: [ { price: "9", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/balsam-oleogin/", seller: "Laboratoire Diamex" } ]},
  {name: "Conditioner Coco", type: "Balsam", sizes: ["350ml", "800ml"], features: ["Blană scurtă", "Blană lungă", "Blană încâlcită", "Blană deteriorată", "Cățeluși", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CONDITIONER-CONDITIONERCOCOBIO.webp", link: "https://www.diamex.ro/produs/balsam-coco/", priceCurrency: "EUR", offers: [ { price: "43", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/balsam-coco/", seller: "Laboratoire Diamex" } ]},
  {name: "Tahiti Dog", type: "Balsam", sizes: ["250ml", "1L", "5L"], features: ["Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată", "Blană încâlcită", "Blană deteriorată", "Volumizare"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamextahitibalsam.webp", link: "https://www.diamex.ro/produs/balsam-tahiti-dog/", priceCurrency: "EUR", offers: [ { price: "10", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/balsam-tahiti-dog/", seller: "Laboratoire Diamex" } ]},
  
  
  
  
  
  
  {name: "PURE Moisturizing & Shine", type: "Balsam", sizes: ["300ml", "1L", "5L"], features: ["Extra strălucire", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată", "Blană încâlcită", "Blană deteriorată", "Volumizare"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PURE-MOISTURIZING_SHINECONDITIONER.webp", link: "https://www.diamex.ro/produs/balsam-pure-moisturizing-shine/", priceCurrency: "EUR", offers: [ { price: "21", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/balsam-pure-moisturizing-shine/", seller: "Laboratoire Diamex" } ]},
  {name: "Mineral professional", type: "Balsam", sizes: ["250ml", "1L", "5L"], features: ["Blană încâlcită", "Volumizare", "Blană lungă", "Blană deteriorată", "Anti căderea părului", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-MINERAL-BAUME.webp", link: "https://www.diamex.ro/produs/balsam-mineral/", priceCurrency: "EUR", offers: [ { price: "18", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/balsam-mineral/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Volumizing Treatment", type: "Balsam", sizes: ["500ml"], features: ["Volumizare","Extra strălucire", "Blană lungă", "Blană încâlcită", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexPUREVolumizingTreatmentbalsam.webp", link: "https://www.diamex.ro/produs/balsam-pure-volumizing-treatment/", priceCurrency: "EUR", offers: [ { price: "59", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/balsam-pure-volumizing-treatment/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Smoothing & Protective", type: "Balsam", sizes: ["500ml" ], features: ["Blană încâlcită", "Blană lungă", "Blană deteriorată", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexPURESmoothing_Protectivebalsam.webp", link: "https://www.diamex.ro/produs/balsam-pure-smoothing-protective/", priceCurrency: "EUR", offers: [ { price: "69", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/balsam-pure-smoothing-protective/", seller: "Laboratoire Diamex" } ]},
  {name: "Balsam Paws and Nose", type: "Balsam", sizes: ["50ml"], features: ["Îngrijirea labuțelor și a nasului", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexPattes_Truffebalsampentruingrijirealabelorsianasului.webp", link: "https://www.diamex.ro/produs/crema-bio-technic-pentru-ingrijirea-labelor-si-a-nasului/", priceCurrency: "EUR", offers: [ { price: "18", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/crema-bio-technic-pentru-ingrijirea-labelor-si-a-nasului/", seller: "Laboratoire Diamex" } ]},
  {name: "Gel Spray", type: "Spray", sizes: ["400ml"], features: ["Volumizare", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-GELSPRAY400ML.webp", link: "https://www.diamex.ro/produs/spray-gel-hair-care-fixativ/", priceCurrency: "EUR", offers: [ { price: "17", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-gel-hair-care-fixativ/", seller: "Laboratoire Diamex" } ]},
  {name: "Top Finish", type: "Spray", sizes: ["200ml", "1L", "5L"], features: ["Anti static", "Extra strălucire", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-TOPFINISH.webp", link: "https://www.diamex.ro/produs/spray-top-finish-hair-care-antistatic/", priceCurrency: "EUR", offers: [ { price: "16", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-top-finish-hair-care-antistatic/", seller: "Laboratoire Diamex" } ]},
  {name: "Performance Plus", type: "Spray", sizes: ["200ml", "1L", "5L"], features: ["Blană încâlcită", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/Performanceplus.webp", link: "https://www.diamex.ro/produs/diamex-performance-plus-hair-care-descalcire/", priceCurrency: "EUR", offers: [ { price: "14", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-performance-plus-hair-care-descalcire/", seller: "Laboratoire Diamex" } ]},
  {name: "Delicat", type: "Spray", sizes: ["200ml"], features: ["Piele sensibilă", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexDelicatspray.webp", link: "https://www.diamex.ro/produs/spray-delicat-skin-care/", priceCurrency: "EUR", offers: [ { price: "15", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-delicat-skin-care/", seller: "Laboratoire Diamex" } ]},
  {name: "Splendid", type: "Spray", sizes: ["400ml"], features: ["Extra strălucire", "Anti static", "Blană încâlcită", "Blană scurtă", "Blană albă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-SPRAYSPLENDID400ML.webp", link: "https://www.diamex.ro/produs/spray-splendid-hair-care-stralucire/", priceCurrency: "EUR", offers: [ { price: "18", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-splendid-hair-care-stralucire/", seller: "Laboratoire Diamex" } ]},
  {name: "Splendid Tahiti Dog", type: "Spray", sizes: ["400ml"], features: ["Extra strălucire", "Anti static", "Blană încâlcită", "Blană deteriorată", "Blană scurtă", "Blană albă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-TAHITIDOG-SPRAYSPLENDID.webp", link: "https://www.diamex.ro/produs/spray-splendid-tahiti-dog/", priceCurrency: "EUR", offers: [ { price: "18", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-splendid-tahiti-dog/", seller: "Laboratoire Diamex" } ]},
  {name: "Volume Plus", type: "Spray", sizes: ["150ml"], features: ["Volumizare", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexVolumePlus.webp", link: "https://www.diamex.ro/produs/spray-volume-plus-hair-care/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-volume-plus-hair-care/", seller: "Laboratoire Diamex" } ]},
  {name: "Revital Care", type: "Spray", sizes: ["30ml"], features: ["Extra strălucire", "Blană încâlcită", "Blană deteriorată", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-REVITALCARE.webp", link: "https://www.diamex.ro/produs/spray-revital-hair-care/", priceCurrency: "EUR", offers: [ { price: "24", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-revital-hair-care/", seller: "Laboratoire Diamex" } ]},
  {name: "Dimecon Spray", type: "Spray", sizes: ["250ml", "500ml"], features: ["Anti paraziți", "Blană albă", "Blană lungă", "Blană scurtă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-DIMECONSPRAY.webp", link: "https://www.diamex.ro/produs/spray-repelent-dimecon/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-repelent-dimecon/", seller: "Laboratoire Diamex" } ]},
  {name: "Mineral professional", type: "Spray", sizes: ["250ml", "500ml", "1L", "5L"], features: ["Blană deteriorată", "Blană încâlcită", "Blană scurtă", "Blană albă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-MINERAL-LOTION.webp", link: "https://www.diamex.ro/produs/crema-mineral/", priceCurrency: "EUR", offers: [ { price: "17", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/crema-mineral/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Dry Wash & Volume", type: "Spray", sizes: ["300ml"], features: ["Curățare uscată", "Volumizare", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/Pure_care_dry_wash_and_volume.webp", link: "https://www.diamex.ro/produs/sampon-pure-dry-wash-volume-curatare-fara-clatire/", priceCurrency: "EUR", offers: [ { price: "23", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/sampon-pure-dry-wash-volume-curatare-fara-clatire/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Growth & Strength", type: "Spray", sizes: ["300ml"], features: ["Blană deteriorată", "Anti căderea părului", "Blană scurtă", "Blană albă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexPUREGrowth_Strengthspray.webp", link: "https://www.diamex.ro/produs/spray-pure-growth-strength/", priceCurrency: "EUR", offers: [ { price: "28", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-pure-growth-strength/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Smoothing & Protective", type: "Spray", sizes: ["300ml"], features: ["Blană deteriorată", "Blană încâlcită", "Anti căderea părului", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexPURESmoothing_Protectivespray.webp", link: "https://www.diamex.ro/produs/spray-pure-smoothing-protective/", priceCurrency: "EUR", offers: [ { price: "28", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-pure-smoothing-protective/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Volumizing Treatment", type: "Spray", sizes: ["300ml"], features: ["Volumizare", "Blană încâlcită", "Blană deteriorată", "Anti căderea părului", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexPUREVolumizingTreatmentspray.webp", link: "https://www.diamex.ro/produs/spray-pure-volumizing-treatment/", priceCurrency: "EUR", offers: [ { price: "28", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-pure-volumizing-treatment/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Detangling & Protecting", type: "Spray", sizes: ["300ml"], features: ["Blană încâlcită", "Blană deteriorată","Extra strălucire", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/PURE-DETANGLING-PROTECTING-SPRAY.webp", link: "https://www.diamex.ro/produs/spray-pure-detangling-protecting/", priceCurrency: "EUR", offers: [ { price: "23", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-pure-detangling-protecting/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Smoothing & Structuring", type: "Spray", sizes: ["150ml"], features: ["Anti static", "Volumizare", "Extra strălucire", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/PURE-SMOOTHING-STRUCTURING-FOAM-150ML.webp", link: "https://www.diamex.ro/produs/spuma-pure-smoothing-structuring/", priceCurrency: "EUR", offers: [ { price: "28", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spuma-pure-smoothing-structuring/", seller: "Laboratoire Diamex" } ]},
  {name: "Brillance", type: "Spray", sizes: ["150ml", "400ml"], features: ["Extra strălucire", "Blană scurtă", "Blană lungă", "Blană albă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-SPRAYBRILLANCE.fw.webp", link: "https://www.diamex.ro/produs/spray-brillance-hair-care-stralucire/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/spray-brillance-hair-care-stralucire/", seller: "Laboratoire Diamex" } ]},
  {name: "Easy Tick", type: "Soluție", sizes: ["30ml"], features: ["Anti paraziți", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/easytick.webp", link: "https://www.diamex.ro/produs/solutie-pentru-indepartarea-capuselor-easy-tick/", priceCurrency: "EUR", offers: [ { price: "7", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/solutie-pentru-indepartarea-capuselor-easy-tick/", seller: "Laboratoire Diamex" } ]},
  {name: "Ear Cleaner", type: "Soluție", sizes: ["100ml", "1L"], features: ["Ingrijirea urechilor", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-EARCLEANER.webp", link: "https://www.diamex.ro/produs/solutie-ear-cleaner-pentru-curatarea-urechilor/", priceCurrency: "EUR", offers: [ { price: "8", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/solutie-ear-cleaner-pentru-curatarea-urechilor/", seller: "Laboratoire Diamex" } ]},
  {name: "Hydranil", type: "Soluție", sizes: ["100ml", "200ml", "1L"], features: ["Ingrijirea ochilor", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-HYDRANIL.webp", link: "https://www.diamex.ro/produs/solutie-hydranil-pentru-curatarea-ochilor/", priceCurrency: "EUR", offers: [ { price: "7", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/solutie-hydranil-pentru-curatarea-ochilor/", seller: "Laboratoire Diamex" } ]},
  {name: "Ear Care", type: "Soluție", sizes: ["200ml", "1L"], features: ["Ingrijirea urechilor", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-EARCARE.webp", link: "https://www.diamex.ro/produs/solutie-pentru-curatarea-urechilor-ear-care/", priceCurrency: "EUR", offers: [ { price: "11", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/solutie-pentru-curatarea-urechilor-ear-care/", seller: "Laboratoire Diamex" } ]},
  {name: "Dianor", type: "Soluție", sizes: ["30ml", "200ml", "1L"], features: ["Ingrijirea urechilor", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-DIANOR.webp", link: "https://www.diamex.ro/produs/solutie-dianor-pentru-curatarea-urechilor/", priceCurrency: "EUR", offers: [ { price: "7", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/solutie-dianor-pentru-curatarea-urechilor/", seller: "Laboratoire Diamex" } ]},
  {name: "Ear Fresh", type: "Pudră", sizes: ["25gr", "85gr"], features: ["Ingrijirea urechilor", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-CARE-EARFRESH.webp", link: "https://www.diamex.ro/produs/pudra-pentru-curatarea-urechilor-ear-fresh/", priceCurrency: "EUR", offers: [ { price: "15", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/pudra-pentru-curatarea-urechilor-ear-fresh/", seller: "Laboratoire Diamex" } ]},
  {name: "PURE Texture & Volume", type: "Pudră", sizes: ["30gr"], features: ["Stripping", "Volumizare", "Blană albă"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/Diamex_Pudra_PURE_Texture_Volume.webp", link: "https://www.diamex.ro/produs/pudra-pure-texture-volume/", priceCurrency: "EUR", offers: [ { price: "27", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/pudra-pure-texture-volume/", seller: "Laboratoire Diamex" } ]},
  {name: "Soft White Powder", type: "Pudră", sizes: ["90gr", "1Kg"], features: ["Stripping", "Blană albă"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexSoftWhitepudrapentrustripping.webp", link: "https://www.diamex.ro/produs/pudra-soft-white-powder-hair-care-pentru-stripping/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/pudra-soft-white-powder-hair-care-pentru-stripping/", seller: "Laboratoire Diamex" } ]},
  {name: "Hard White Powder", type: "Pudră", sizes: ["90gr", "1Kg"], features: ["Stripping", "Blană albă"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexHardWhitepudrapentrustripping.webp", link: "https://www.diamex.ro/produs/pudra-hard-white-powder-hair-care-pentru-stripping/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/pudra-hard-white-powder-hair-care-pentru-stripping/", seller: "Laboratoire Diamex" } ]},
  {name: "Quick Stop", type: "Pudră", sizes: ["25gr"], features: ["Oprește sângerarea unghiilor", "Blană albă", "Blană scurtă", "Blană lungă", "Blană neagră", "Blană colorată"], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamexwuickstop.webp", link: "https://www.diamex.ro/produs/pudra-quick-stop-opreste-sangerarea-unghiilor/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/pudra-quick-stop-opreste-sangerarea-unghiilor/", seller: "Laboratoire Diamex" } ]},
  {name: "Cleaner Salon Provencal", type: "Curățare", sizes: ["1L", "5L"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-HYGIENE-CLEANERSALONPROVENCAL.webp", link: "https://www.diamex.ro/produs/diamex-cleaner-salon-provencal/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-cleaner-salon-provencal/", seller: "Laboratoire Diamex" } ]},
  {name: "Cleaner Salon Eucalyptus", type: "Curățare", sizes: ["1L", "5L"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-HYGIENE-CLEANERSALONEUCALYPTUS.webp", link: "https://www.diamex.ro/produs/diamex-cleaner-salon-eucalyptus/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-cleaner-salon-eucalyptus/", seller: "Laboratoire Diamex" } ]},
  {name: "Cleaner Salon Citronella", type: "Curățare", sizes: ["1L", "5L"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-HYGIENE-CLEANERSALONCITRONNELLE.webp", link: "https://www.diamex.ro/produs/diamex-cleaner-salon-citronella/", priceCurrency: "EUR", offers: [ { price: "17", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-cleaner-salon-citronella/", seller: "Laboratoire Diamex" } ]},
  {name: "Cleaner Salon Mentos", type: "Curățare", sizes: ["1L", "5L"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-HYGIENE-CLEANERSALONMENTOS.webp", link: "https://www.diamex.ro/produs/diamex-cleaner-salon-mentos/", priceCurrency: "EUR", offers: [ { price: "13", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-cleaner-salon-mentos/", seller: "Laboratoire Diamex" } ]},
  {name: "Tahiti Dog", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexTahitiparfum.fw.webp", link: "https://www.diamex.ro/produs/parfum-tahiti-dog/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/parfum-tahiti-dog/", seller: "Laboratoire Diamex" } ]},
  {name: "Cuberdon", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexCuberdonparfum.fw.webp", link: "https://www.diamex.ro/produs/parfum-cuberdon/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/parfum-cuberdon/", seller: "Laboratoire Diamex" } ]},
  {name: "Bubble Gum", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/diamexbubblegumparfum.webp", link: "https://www.diamex.ro/produs/parfum-bubble-gum/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/parfum-bubble-gum/", seller: "Laboratoire Diamex" } ]},
  {name: "Vanille", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PERFUME-VANILLE100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-vanille/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-vanille/", seller: "Laboratoire Diamex" } ]},
  {name: "Hollywood", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PERFUME-HOLLYWOOD100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-hollywood/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-hollywood/", seller: "Laboratoire Diamex" } ]},
  {name: "Melon", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PERFUME-MELON100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-melon/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-melon/", seller: "Laboratoire Diamex" } ]},
  {name: "Prestige", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PERFUME-PRESTIGE100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-prestige/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-prestige/", seller: "Laboratoire Diamex" } ]},
  {name: "Senteur Ete", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PERFUME-SENTEURETE100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-senteur-ete/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-senteur-ete/", seller: "Laboratoire Diamex" } ]},
  {name: "Ocean", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PERFUME-OCEAN100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-ocean/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-ocean/", seller: "Laboratoire Diamex" } ]},
  {name: "Apple", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexAppleparfum.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-apple/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-apple/", seller: "Laboratoire Diamex" } ]},
  {name: "Honey", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX_-_PERFUME_-_MIEL_100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-honey/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-honey/", seller: "Laboratoire Diamex" } ]},
  {name: "Coco", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PERFUME-COCO100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-coco/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-coco/", seller: "Laboratoire Diamex" } ]},
  {name: "Fraise Strawberry", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexFraiseStrawberryparfum.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-fraise-strawberry/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-fraise-strawberry/", seller: "Laboratoire Diamex" } ]},
  {name: "Bleu Azur", type: "Parfum", sizes: ["100ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-PERFUME-BLEUAZUR100ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-bleu-azur/", priceCurrency: "EUR", offers: [ { price: "12", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-bleu-azur/", seller: "Laboratoire Diamex" } ]},
  {name: "Mister Fresh", type: "Parfum", sizes: ["50ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexMisterFreshparfum.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-mister-fresh/", priceCurrency: "EUR", offers: [ { price: "16", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-mister-fresh/", seller: "Laboratoire Diamex" } ]},
  {name: "Elliot&Lola Caress", type: "Parfum", sizes: ["50ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-ELLIOT_LOLA-CARESS50ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-elliotlola-caress/", priceCurrency: "EUR", offers: [ { price: "10", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-elliotlola-caress/", seller: "Laboratoire Diamex" } ]},
  {name: "Elliot&Lola Enjoy", type: "Parfum", sizes: ["50ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DiamexElliot_LolaEnjoyparfum.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-elliotlola-enjoy/", priceCurrency: "EUR", offers: [ { price: "10", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-elliotlola-enjoy/", seller: "Laboratoire Diamex" } ]},
  {name: "Elliot&Lola Happy", type: "Parfum", sizes: ["50ml"], features: [], image: "https://cdn.jsdelivr.net/gh/goblenro/diamex/DIAMEX-ELLIOT_LOLA-HAPPY50ML.fw.webp", link: "https://www.diamex.ro/produs/diamex-parfum-elliotlola-happy/", priceCurrency: "EUR", offers: [ { price: "10", priceCurrency: "EUR", availability: "InStock", url: "https://www.diamex.ro/produs/diamex-parfum-elliotlola-happy/", seller: "Laboratoire Diamex" } ]}


 ];

    const categoriesInternal = ["Șampon","Balsam","Spray","Soluție","Pudră","Parfum","Curățare"];
    const typesInternal = ["Blană scurtă","Blană lungă","Blană sârmoasă","Blană încâlcită","Blană deteriorată","Piele sensibilă","Volumizare","Anti mătreață","Anti paraziți","Cățeluși","Blană albă","Blană neagră","Blană colorată","Anti căderea părului","Anti static","Curățare uscată","Extra strălucire","Ingrijirea ochilor","Ingrijirea urechilor","Îngrijirea labuțelor și a nasului","Stripping","Oprește sângerarea unghiilor"];
    const sizes = ["25gr","30gr","30ml","50ml","85gr","90gr","100ml","150ml","200ml","250ml","300ml","350ml","400ml","500ml","800ml","1L","1Kg","5L","20L","25L"];


        const translations = {
            ro: {
                metaTitle: 'Laboratoire Diamex - Ghid de selectie produse interactiv',
                metaDescription: 'Găsește rapid produsele Laboratoire Diamex pentru câini: șampoane, balsamuri, spray-uri și soluții. Filtre inteligente după categorie, cantitate și tip blană.',
                metaKeywords: 'Diamex, ghid, șampon câini, balsam câini, produse grooming, filtrare produse',
                categories: categoriesInternal.slice(),
                types: typesInternal.slice(),
                headerTitle: 'Ghid de selecție produse Diamex - Cosmetice profesionale pentru îngrijirea câinilor',
                headerSubtitle: 'Ghid de selecție produse Diamex - Cosmetice profesionale pentru îngrijirea câinilor',
                categoryHeading: '🧴 Filtrare după categorie:',
                sizeHeading: '📦 Filtrare după cantitate:',
                typeHeading: '🐕 Filtrare după tip blană:',
                nameHeading: '🔍 Filtrare după nume:',
                searchPlaceholder: 'Ex: white, puppy, aloe...',
                clearFilters: '🔄 Resetează filtrele',
                productCountSuffix: 'produse',
                noResultsTitle: '😔 Niciun produs găsit',
                noResultsHint: 'Încercați să modificați filtrele selectate',
                whyTitle: 'De ce să alegi produsele Laboratoire Diamex?',
                whyText: 'Laboratoire Diamex este lider în producția de cosmetice profesionale pentru câini, oferind o gamă completă de șampoane, balsamuri, spray-uri și soluții de îngrijire. Produsele noastre sunt formulate special pentru diferite tipuri de blană: scurtă, lungă, sârmoasă sau deteriorată.',
                ourRangeTitle: 'Gama noastră include:',
                ourRangeList1: 'Șampoane specializate - pentru blană albă, neagră, colorată sau sensibilă',
                ourRangeList2: 'Balsamuri nutritive - pentru descâlcire și strălucire',
                ourRangeList3: 'Spray-uri profesionale - anti-static, volumizante și protective',
                ourRangeList4: 'Soluții de îngrijire - pentru urechi, ochi și lăbuțe',
                footer: '© 2025 Laboratoire Diamex. Toate drepturile rezervate.'
            },
            en: {
                metaTitle: 'Laboratoire Diamex - Interactive product selection guide',
                metaDescription: 'Quickly find Laboratoire Diamex products for dogs: shampoos, conditioners, sprays and care solutions. Smart filters by category, size and coat type.',
                metaKeywords: 'Diamex, guide, dog shampoo, dog conditioner, grooming products, product filter',
                categories: ["Shampoo","Conditioner","Spray","Solution","Powder","Perfume","Cleaning"],
                types: ["Short coat","Long coat","Wire coat","Tangled coat","Damaged coat","Sensitive skin",
                    "Volume","Anti-dandruff","Anti-parasite","Puppy","White coat","Black coat","Colored coat",
                    "Anti hair loss","Anti-static","Dry cleansing","Extra shine","Eye care","Ear care","Paw & nose care","Stripping","Stops nail bleeding"],
                headerTitle: 'Selection guide - Diamex product catalog',
                headerSubtitle: 'Diamex Product Selection Guide - Professional Dog Care Cosmetics',
                categoryHeading: '🧴 Filter by category:',
                sizeHeading: '📦 Filter by size:',
                typeHeading: '🐕 Filter by coat/type:',
                nameHeading: '🔍 Filter by name:',
                searchPlaceholder: 'e.g.: white, puppy, aloe...',
                clearFilters: '🔄 Reset filters',
                productCountSuffix: 'products',
                noResultsTitle: '😔 No products found',
                noResultsHint: 'Try changing the selected filters',
                whyTitle: 'Why choose Laboratoire Diamex products?',
                whyText: 'Laboratoire Diamex is a leader in professional dog cosmetics, offering a complete range of shampoos, conditioners, sprays and care solutions designed for different coat types.',
                ourRangeTitle: 'Our range includes:',
                ourRangeList1: 'Specialized shampoos - for white, black, colored or sensitive fur',
                ourRangeList2: 'Nourishing conditioners - for detangling and shine',
                ourRangeList3: 'Professional sprays - anti-static, volumizing and protective',
                ourRangeList4: 'Care solutions - for ears, eyes and paws',
                footer: '© 2025 Laboratoire Diamex. All rights reserved.'
            },
            fr: {
                metaTitle: 'Laboratoire Diamex - Guide interactif de sélection des produits',
                metaDescription: 'Trouvez rapidement les produits Laboratoire Diamex pour chiens : shampoings, après-shampoings, sprays et solutions de soin. Filtres par catégorie, quantité et type de poil.',
                metaKeywords: 'Diamex, guide, shampoing chien, après-shampoing, produits grooming, filtres',
                categories: ["Shampoing","Après-shampoing","Spray","Solution","Poudre","Parfum","Nettoyage"],
                types: ["Poil court","Poil long","Poil dur (wire)","Poil emmêlé","Poil abîmé","Peau sensible",
                    "Volume","Anti-pelliculaire","Anti-parasites","Chiot","Poil blanc","Poil noir","Poil coloré",
                    "Anti-chute","Anti-statique","Nettoyage à sec","Brillance","Soin des yeux","Soin des oreilles","Soin pattes et museau","Stripping","Arrête le saignement des ongles"],
                headerTitle: 'Guide de sélection - Catalogue Diamex',
                headerSubtitle: 'Guide de sélection des produits Diamex - Cosmétiques professionnels pour chiens',
                categoryHeading: '🧴 Filtrer par catégorie :',
                sizeHeading: '📦 Filtrer par quantité :',
                typeHeading: '🐕 Filtrer par type de pelage :',
                nameHeading: '🔍 Filtrer par nom :',
                searchPlaceholder: 'Ex : white, puppy, aloe...',
                clearFilters: '🔄 Réinitialiser les filtres',
                productCountSuffix: 'produits',
                noResultsTitle: '😔 Aucun produit trouvé',
                noResultsHint: 'Essayez de modifier les filtres sélectionnés',
                whyTitle: 'Pourquoi choisir les produits Laboratoire Diamex ?',
                whyText: 'Laboratoire Diamex est un leader des cosmétiques professionnels pentru câini.',
                ourRangeTitle: 'Notre gamme comprend :',
                ourRangeList1: 'Shampoings spécialisés - pour poils blancs, noirs, colorés ou sensibles',
                ourRangeList2: 'Après-shampooings nourrissants - pour démêler și faire briller',
                ourRangeList3: 'Sprays professionnels - antistatiques, volumisants și protecteurs',
                ourRangeList4: 'Solutions de soin - pentru les oreilles, les yeux et les pattes',
                footer: '© 2025 Laboratoire Diamex. Tous droits réservés.'
            },
            nl: { 
                metaTitle: 'Laboratoire Diamex - Interactieve productselectiegids',
                metaDescription: 'Vind snel Laboratoire Diamex producten voor honden: shampoos, conditioners, sprays en verzorgingsoplossingen. Filters op categorie, inhoud en vachttype.',
                metaKeywords: 'Diamex, gids, hondenshampoo, conditioner, grooming, filters',
                categories: ["Shampoo","Conditioner","Spray","Oplossing","Poeder","Parfum","Schoonmaak"],
                types: ["Korte vacht","Lange vacht","Draadvacht","Verwarde vacht","Beschadigde vacht","Gevoelige huid",
                    "Volume","Anti-roos","Anti-parasiet","Puppy","Witte vacht","Zwarte vacht","Gekleurde vacht",
                    "Anti haaruitval","Anti-statisch","Droge reiniging","Extra glans","Oogverzorging","Oorverzorging","Poot- & neusverzorging","Stripping","Stopt nagelbloeding"],
                headerTitle: 'Selectiegids - Diamex productcatalogus',
                headerSubtitle: 'Diamex Productselectiegids - Professionele cosmetica voor hondenverzorging',
                categoryHeading: '🧴 Filter op categorie:',
                sizeHeading: '📦 Filter op inhoud:',
                typeHeading: '🐕 Filter op vachttype:',
                nameHeading: '🔍 Filter op naam:',
                searchPlaceholder: 'bv.: white, puppy, aloe...',
                clearFilters: '🔄 Filters resetten',
                productCountSuffix: 'producten',
                noResultsTitle: '😔 Geen producten gevonden',
                noResultsHint: 'Probeer de geselecteerde filters aan te passen',
                whyTitle: 'Waarom kiezen voor Laboratoire Diamex?',
                whyText: 'Laboratoire Diamex biedt een volledig assortiment professionele hondenproducten.',
                ourRangeTitle: 'Ons assortiment bevat:',
                ourRangeList1: 'Gespecialiseerde shampoos - voor witte, zwarte, gekleurde of gevoelige vachten',
                ourRangeList2: 'Voedende conditioners - pentru ontwarren en glans',
                ourRangeList3: 'Professionele sprays - antistatisch, volume en bescherming',
                ourRangeList4: 'Verzorgingsoplossingen - voor oren, ogen en poten',
                footer: '© 2025 Laboratoire Diamex. Alle rechten voorbehouden.'
            },
            de: {
                metaTitle: 'Laboratoire Diamex – Interaktiver Produktauswahlleitfaden',
                metaDescription: 'Finden Sie schnell Laboratoire Diamex Produkte für Hunde: Shampoos, Conditioner, Sprays und Pflegelösungen. Filter nach Kategorie, Menge und Felltyp.',
                metaKeywords: 'Diamex, Auswahlhilfe, Hundeshampoo, Conditioner, Grooming, Filter',
                categories: ["Shampoo","Conditioner","Spray","Lösung","Puder","Parfum","Reinigung"],
                types: ["Kurzhaar","Langhaar","Drahthaar","Verfilzte Haare","Beschädigtes Fell","Empfindliche Haut",
                    "Volumen","Anti-Schuppen","Anti-Parasiten","Welpe","Weißes Fell","Schwarzes Fell","Buntes Fell",
                    "Gegen Haarausfall","Anti-statisch","Trockene Reinigung","Extra Glanz","Augenpflege","Ohrpflege","Pfoten- & Nasenpflege","Stripping","Stoppt Nagelbluten"],
                headerTitle: 'Auswahlhilfe - Diamex Produktkatalog',
                headerSubtitle: 'Diamex Produktauswahlleitfaden – Professionelle Hundepflegekosmetik',
                categoryHeading: '🧴 Nach Kategorie filtern:',
                sizeHeading: '📦 Nach Menge filtern:',
                typeHeading: '🐕 Nach Felltyp filtern:',
                nameHeading: '🔍 Nach Namen filtern:',
                searchPlaceholder: 'z.B.: white, puppy, aloe...',
                clearFilters: '🔄 Filter zurücksetzen',
                productCountSuffix: 'Produkte',
                noResultsTitle: '😔 Keine Produkte gefunden',
                noResultsHint: 'Versuchen Sie, die ausgewählten Filter zu ändern',
                whyTitle: 'Warum Laboratoire Diamex Produkte wählen?',
                whyText: 'Laboratoire Diamex bietet ein vollständiges Sortiment an professionellen Hundepflegeprodukten.',
                ourRangeTitle: 'Unser Sortiment umfasst:',
                ourRangeList1: 'Spezielle Shampoos - pentru weißes, schwarzes, farbiges oder empfindliches Fell',
                ourRangeList2: 'Nährende Conditioner - pentru Entwirren și Glanz',
                ourRangeList3: 'Professionelle Sprays - antistatisch, voluminös și schützend',
                ourRangeList4: 'Pflegelösungen - pentru Ohren, Augen și Pfoten',
                footer: '© 2025 Laboratoire Diamex. Alle Rechte vorbehalten.'
            },
            es: {
                metaTitle: 'Laboratorio Diamex - Guía interactiva de selección de productos',
                metaDescription: 'Encuentra rápidamente productos Laboratoire Diamex para perros: champús, acondicionadores, sprays y soluciones. Filtros por categoría, cantidad y tipo de pelaje.',
                metaKeywords: 'Diamex, guía, champú perros, acondicionador, grooming, filtros',
                categories: ["Champú","Acondicionador","Spray","Solución","Polvo","Perfume","Limpieza"],
                types: ["Capa corta","Capa larga","Capa dura","Capa enredada","Capa dañada","Piel sensible",
                    "Volumen","Anticaspa","Antiparásitos","Cachorro","Capa blanca","Capa negra","Capa coloreada",
                    "Anticaída","Antiestático","Limpieza seca","Brillo extra","Cuidado de ojos","Cuidado de orejas","Cuidado patas y nariz","Stripping","Detiene sangrado de uñas"],
                headerTitle: 'Guía de selección - Catálogo Diamex',
                headerSubtitle: 'Guía de selección de productos Diamex - Cosméticos profesionales para el cuidado de perros',
                categoryHeading: '🧴 Filtrar por categoría:',
                sizeHeading: '📦 Filtrar por cantidad:',
                typeHeading: '🐕 Filtrar por tipo de pelaje:',
                nameHeading: '🔍 Filtrar por nombre:',
                searchPlaceholder: 'ej.: white, puppy, aloe...',
                clearFilters: '🔄 Restablecer filtros',
                productCountSuffix: 'productos',
                noResultsTitle: '😔 No se encontraron productos',
                noResultsHint: 'Intenta cambiar los filtros seleccionados',
                whyTitle: '¿Por qué elegir los productos Laboratoire Diamex?',
                whyText: 'Laboratoire Diamex es líder în cosmetica profesional pentru perros.',
                ourRangeTitle: 'Nuestra gama incluye:',
                ourRangeList1: 'Champús especializados - pentru pelaje blanco, negro, coloreado o sensible',
                ourRangeList2: 'Acondicionadores nutritivos - pentru desenredar y dar brillo',
                ourRangeList3: 'Sprays profesionales - antiestático, voluminizador y protectores',
                ourRangeList4: 'Soluciones de cuidado - pentru oídos, ojos y patas',
                footer: '© 2025 Laboratoire Diamex. Todos los derechos reservados.'
            },
            it: {
                metaTitle: 'Laboratoire Diamex - Guida interattiva alla selezione dei prodotti',
                metaDescription: 'Trova rapidamente i prodotti Laboratoire Diamex per cani: shampoo, balsami, spray e soluzioni. Filtri per categoria, quantità e tipo di pelo.',
                metaKeywords: 'Diamex, guida, shampoo cani, balsamo, grooming, filtri',
                categories: ["Shampoo","Balsamo","Spray","Soluzione","Polvere","Profumo","Pulizia"],
                types: ["Pelo corto","Pelo lungo","Pelo duro","Pelo arruffato","Pelo danneggiato","Pelle sensibile",
                    "Volume","Anti-forfora","Anti-parassiti","Cucciolo","Pelo bianco","Pelo nero","Pelo colorato",
                    "Anti caduta","Anti-statico","Pulizia a secco","Lucentezza extra","Cura occhi","Cura orecchie","Cura zampe e muso","Stripping","Ferma sanguinamento unghie"],
                headerTitle: 'Guida alla selezione - Catalogo Diamex',
                headerSubtitle: 'Guida alla selezione dei prodotti Diamex - Cosmetici professionali per la cura dei cani',
                categoryHeading: '🧴 Filtra per categoria:',
                sizeHeading: '📦 Filtra per quantità:',
                typeHeading: '🐕 Filtra per tipo di pelo:',
                nameHeading: '🔍 Filtra per nome:',
                searchPlaceholder: 'es.: white, puppy, aloe...',
                clearFilters: '🔄 Resetta filtri',
                productCountSuffix: 'prodotti',
                noResultsTitle: '😔 Nessun prodotto trovato',
                noResultsHint: 'Prova a modificare i filtri selezionati',
                whyTitle: 'Perché scegliere i prodotti Laboratoire Diamex?',
                whyText: 'Laboratoire Diamex offre una gamma completa di prodotti professionali per la cura dei cani.',
                ourRangeTitle: 'La nostra gamma include:',
                ourRangeList1: 'Shampoo specializzati - pentru pelo bianco, nero, colorato o sensibile',
                ourRangeList2: 'Balsami nutrienti - pentru districare și lucidare',
                ourRangeList3: 'Spray professionali - anti-statico, volumizzanti și protettivi',
                ourRangeList4: 'Soluzioni di cura - pentru orecchie, occhi și zampe',
                footer: '© 2025 Laboratoire Diamex. Tutti i diritti riservati.'
            },
            hu: {
                metaTitle: 'Laboratoire Diamex - Interaktív termékkiválasztási útmutató',
                metaDescription: 'Gyorsan megtalálja a Laboratoire Diamex termékeket kutyáknak: samponok, balzsamok, spray-k és ápolószerek. Szűrők kategória, mennyiség és szőrtípus szerint.',
                metaKeywords: 'Diamex, útmutató, sampon kutyáknak, balzsam, grooming, szűrők',
                categories: ["Sampon","Balzsam","Spray","Oldat","Por","Parfüm","Tisztító"],
                types: ["Rövid szőrzet","Hosszú szőrzet","Drótszőrzet","Gubancos szőrzet","Sérült szőrzet","Érzékeny bőr",
                    "Volument","Korpásodás ellen","Parazita ellen","Kölyök","Fehér szőr","Fekete szőr","Színes szőrzet",
                    "Hajhullás ellen","Antisztatikus","Száraz tisztítás","Extra fény","Szemápolás","Fülápolás","Manccs & orr ápolás","Stripping","Állítólag megállítja a köröm vérzését"],
                headerTitle: 'Választási útmutató - Diamex termékkatalógus',
                headerSubtitle: 'Diamex termékválasztási útmutató - Professzionális kutyakozmetikumok',
                categoryHeading: '🧴 Szűrés kategória szerint:',
                sizeHeading: '📦 Szűrés mennyiség szerint:',
                typeHeading: '🐕 Szűrés szőrtípus szerint:',
                nameHeading: '🔍 Szűrés név szerint:',
                searchPlaceholder: 'pl.: white, puppy, aloe...',
                clearFilters: '🔄 Szűrők visszaállítása',
                productCountSuffix: 'termékek',
                noResultsTitle: '😔 Nincs találat',
                noResultsHint: 'Próbálja meg módosítani a szűrőket',
                whyTitle: 'Miért válassza a Laboratoire Diamex termékeket?',
                whyText: 'Laboratoire Diamex vezető a professzionális kutyakozmetikumok piacán.',
                ourRangeTitle: 'Kínálatunk tartalmazza:',
                ourRangeList1: 'Speciális samponok - pentru fehér, fekete, színes vagy érzékeny szőrre',
                ourRangeList2: 'Tápláló balzsamok - pentru kifésülés și fény',
                ourRangeList3: 'Professzionális spray-ek - pentru antisztatikus, volumen și protecție',
                ourRangeList4: 'Ápoló megoldások - pentru fülek, szemek și mancsok',
                footer: '© 2025 Laboratoire Diamex. Minden jog fenntartva.'
            },
            ru: {
                metaTitle: 'Laboratoire Diamex — Интерактивное руководство по выбору продукции',
                metaDescription: 'Быстро найдите продукты Laboratoire Diamex для собак: шампуни, кондиционеры, спреи и средства ухода. Фильтры по категории, объёму и типу шерсти.',
                metaKeywords: 'Diamex, руководство, шампунь для собак, кондиционер, груминг, фильтры',
                categories: ["Шампунь","Кондиционер","Спрей","Раствор","Пудра","Духи","Чистка"],
                types: ["Короткая шерсть","Длинная шерсть","Жёсткая шерсть","Запутавшаяся шерсть","Повреждённая шерсть","Чувствительная кожа",
                    "Объём","Против перхоти","Против паразитов","Щенок","Белая шерсть","Чёрная шерсть","Цветная шерсть",
                    "Против выпадения волос","Антистатик","Сухая очистка","Доп. блеск","Уход за глазами","Уход за ушами","Уход лап и носа","Стриппинг","Останавливает кровотечение ногтей"],
                headerTitle: 'Руководство по выбору - каталог Diamex',
                headerSubtitle: 'Руководство по выбору продукции Diamex — профессиональная косметика для ухода за собаками',
                categoryHeading: '🧴 Фильтр по категории:',
                sizeHeading: '📦 Фильтр по объёму:',
                typeHeading: '🐕 Фильтр по типу шерсти:',
                nameHeading: '🔍 Фильтр по названию:',
                searchPlaceholder: 'напр.: white, puppy, aloe...',
                clearFilters: '🔄 Сбросить фильтры',
                productCountSuffix: 'товаров',
                noResultsTitle: '😔 Продукты не найдены',
                noResultsHint: 'Попробуйте изменить выбранные фильтры',
                whyTitle: 'Почему выбрать Laboratoire Diamex?',
                whyText: 'Laboratoire Diamex — лидер в производстве профессиональной косметики для собак.',
                ourRangeTitle: 'Наша линейка включает:',
                ourRangeList1: 'Специализированные шампуни - pentru белая, чёрная, цветная или чувствительная шерсть',
                ourRangeList2: 'Питательные кондиционеры - pentru распутывание și блеск',
                ourRangeList3: 'Профессиональные спреи - pentru антистатик, объем și защита',
                ourRangeList4: 'Средства ухода - pentru уши, глаза și лапы',
                footer: '© 2025 Laboratoire Diamex. Все права защищены.'
            }
        };


    let selectedCategories = [];
    let selectedSizes = [];
    let selectedTypes = [];
    let searchQuery = '';
    let currentLang = 'en';

    const SUPPORTED_LANGS = ['de','en','es','fr','hu','it','nl','ro','ru'];
    const STORAGE_KEY = 'diamex_lang';
    const DEFAULT_LANG = 'en';

    const FLAG_MAP = {
        de: { code: '1f1e9-1f1ea', label: 'DE' },
        en: { code: '1f1ec-1f1e7', label: 'EN' },
        es: { code: '1f1ea-1f1f8', label: 'ES' },
        fr: { code: '1f1eb-1f1f7', label: 'FR' },
        hu: { code: '1f1ed-1f1fa', label: 'HU' },
        it: { code: '1f1ee-1f1f9', label: 'IT' },
        nl: { code: '1f1f3-1f1f1', label: 'NL' },
        ro: { code: '1f1f7-1f1f4', label: 'RO' },
        ru: { code: '1f1f7-1f1fa', label: 'RU' }
    };

    function createOrUpdateMeta(selector, attrName, attrValue, content) {
        let el = document.head.querySelector(selector);
        if (!el) {
            el = document.createElement('meta');
            el.setAttribute(attrName, attrValue);
            document.head.appendChild(el);
        }
        el.setAttribute('content', content);
    }

    function updateMetaTags(lang) {
        const t = translations[lang] || translations.en;
        if (t.metaTitle) document.title = t.metaTitle;
        if (t.metaDescription) {
            createOrUpdateMeta('meta[name="description"]', 'name', 'description', t.metaDescription);
            createOrUpdateMeta('meta[property="og:description"]', 'property', 'og:description', t.metaDescription);
        }
        if (t.metaKeywords) createOrUpdateMeta('meta[name="keywords"]', 'name', 'keywords', t.metaKeywords);
        if (t.metaTitle) createOrUpdateMeta('meta[property="og:title"]', 'property', 'og:title', t.metaTitle);
    }

    function normalize(str) {
        if (!str) return '';
        return String(str).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function getPreferredLang() {
        try {
            const params = new URLSearchParams(window.location.search);
            const langFromUrl = params.get('lang');
            if (langFromUrl && SUPPORTED_LANGS.includes(langFromUrl)) {
                return langFromUrl;
            }
        } catch (e) {}
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
        } catch (e) {}
        return DEFAULT_LANG;
    }

    function setupLangSwitcher() {
        const switcher = document.getElementById('langSwitcher');
        const btn = document.getElementById('langBtn');
        const list = document.getElementById('langList');
        const label = document.getElementById('langLabel');
        const flagImg = document.getElementById('langFlag');

        function updateLangUI(lang) {
            const map = FLAG_MAP[lang] || FLAG_MAP.en;
            const svgUrl = `https://twemoji.maxcdn.com/v/latest/svg/${map.code}.svg`;
            if (flagImg) { flagImg.src = svgUrl; flagImg.alt = map.label; flagImg.style.display = ''; }
            if (label) label.textContent = map.label;
            list.querySelectorAll('li').forEach(li => { li.setAttribute('aria-selected', String(li.dataset.lang === lang)); });
        }

        updateLangUI(currentLang);

        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            list.hidden = expanded;
            if (!expanded) {
                const sel = list.querySelector(`li[data-lang="${currentLang}"]`);
                (sel || list.querySelector('li')).focus();
            }
        });

        list.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (!li) return;
            selectLang(li.dataset.lang);
        });

        list.addEventListener('keydown', (e) => {
            const items = Array.from(list.querySelectorAll('li'));
            const idx = items.indexOf(document.activeElement);
            if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx + 1) % items.length].focus(); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); items[(idx - 1 + items.length) % items.length].focus(); }
            else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const li = document.activeElement; if (li && li.dataset && li.dataset.lang) selectLang(li.dataset.lang); }
            else if (e.key === 'Escape') { btn.setAttribute('aria-expanded', 'false'); list.hidden = true; btn.focus(); }
        });

        document.addEventListener('click', (e) => { if (!switcher.contains(e.target)) { list.hidden = true; btn.setAttribute('aria-expanded', 'false'); } });

        function selectLang(lang) {
            if (!translations[lang]) return;
            currentLang = lang;
            try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
            updateLangUI(lang);
            changeLanguage(lang);
        }
    }

    function init() {
        currentLang = getPreferredLang();
        document.documentElement.lang = currentLang;
        updateMetaTags(currentLang);
        initFromURL();
        setupLangSwitcher();
        renderFilters();
        renderProducts();
        document.getElementById('searchInput').addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderProducts();
        });
        updateUITexts();
    }

    function renderFilters() {
        const categoryFilters = document.getElementById('categoryFilters');
        const sizeFilters = document.getElementById('sizeFilters');
        const typeFilters = document.getElementById('typeFilters');
        if (!categoryFilters || !sizeFilters || !typeFilters) return;
        categoryFilters.innerHTML = '';
        sizeFilters.innerHTML = '';
        typeFilters.innerHTML = '';

        categoriesInternal.forEach((internal, idx) => {
            const label = translations[currentLang].categories[idx] || internal;
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = label;
            btn.dataset.value = internal;
            btn.onclick = () => toggleCategoryFilter(internal);
            categoryFilters.appendChild(btn);
        });

        sizes.forEach(size => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = size;
            btn.dataset.value = size;
            btn.onclick = () => toggleSizeFilter(size);
            sizeFilters.appendChild(btn);
        });

        typesInternal.forEach((internal, idx) => {
            const label = translations[currentLang].types[idx] || internal;
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = label;
            btn.dataset.value = internal;
            btn.onclick = () => toggleTypeFilter(internal);
            typeFilters.appendChild(btn);
        });

        updateFilterButtons();
    }

    function toggleCategoryFilter(categoryInternal) {
        const index = selectedCategories.indexOf(categoryInternal);
        if (index > -1) selectedCategories.splice(index, 1);
        else selectedCategories.push(categoryInternal);
        updateFilterButtons();
        renderProducts();
    }

    function toggleSizeFilter(size) {
        const index = selectedSizes.indexOf(size);
        if (index > -1) selectedSizes.splice(index, 1);
        else selectedSizes.push(size);
        updateFilterButtons();
        renderProducts();
    }

    function toggleTypeFilter(typeInternal) {
        const index = selectedTypes.indexOf(typeInternal);
        if (index > -1) selectedTypes.splice(index, 1);
        else selectedTypes.push(typeInternal);
        updateFilterButtons();
        renderProducts();
    }

    function updateFilterButtons() {
        document.querySelectorAll('#categoryFilters .filter-btn').forEach(btn => {
            const val = btn.dataset.value;
            btn.classList.toggle('active', selectedCategories.includes(val));
        });
        document.querySelectorAll('#sizeFilters .filter-btn').forEach(btn => {
            const val = btn.dataset.value;
            btn.classList.toggle('active', selectedSizes.includes(val));
        });
        document.querySelectorAll('#typeFilters .filter-btn').forEach(btn => {
            const val = btn.dataset.value;
            btn.classList.toggle('active', selectedTypes.includes(val));
        });
    }

    function calculateScore(productFeatures, selectedFilters) {
        let totalScore = 0;
        selectedFilters.forEach(filter => {
            const position = productFeatures.indexOf(filter);
            if (position !== -1) totalScore += position + 1;
            else totalScore += 1000;
        });
        return { positionScore: totalScore / selectedFilters.length, totalFeatures: productFeatures.length };
    }

 



function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const q = normalize(searchQuery || '');

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.type);
        const sizeMatch = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size));
        const typeMatch = selectedTypes.length === 0 || selectedTypes.every(type => product.features.includes(type));

        let nameMatch = true;
        if (q) {
            const nameMatches = normalize(product.name).includes(q);
            const featuresMatch = product.features.some(feature => {
                const internal = normalize(feature);
                if (internal.includes(q)) return true;
                const idx = typesInternal.indexOf(feature);
                if (idx !== -1) {
                    const translated = translations[currentLang] && translations[currentLang].types ? translations[currentLang].types[idx] : null;
                    if (translated && normalize(translated).includes(q)) return true;
                }
                return false;
            });
            nameMatch = nameMatches || featuresMatch;
        }

        const nameQueryMatch = q ? nameMatch : true;
        return categoryMatch && sizeMatch && typeMatch && nameQueryMatch;
    });

    const scored = filteredProducts.map(product => {
        let nameScore = 0;
        if (!q) nameScore = 0;
        else {
            const normName = normalize(product.name);
            if (normName.includes(q)) nameScore = 0;
            else {
                let minIdx = Infinity;
                product.features.forEach((feature, idx) => {
                    const internal = normalize(feature);
                    if (internal.includes(q)) {
                        if (idx < minIdx) minIdx = idx;
                    } else {
                        const tIdx = typesInternal.indexOf(feature);
                        if (tIdx !== -1) {
                            const translated = translations[currentLang] && translations[currentLang].types ? translations[currentLang].types[tIdx] : null;
                            if (translated && normalize(translated).includes(q) && idx < minIdx) minIdx = idx;
                        }
                    }
                });
                nameScore = (minIdx !== Infinity) ? (1 + minIdx) : 10000;
            }
        }
        const typeScoreObj = selectedTypes.length ? calculateScore(product.features, selectedTypes) : { positionScore: 0, totalFeatures: product.features.length };
        return { product, nameScore, typeScoreObj };
    });

    scored.sort((a, b) => {
        if (q) {
            if (a.nameScore !== b.nameScore) return a.nameScore - b.nameScore;
            if (selectedTypes.length) {
                if (a.typeScoreObj.positionScore !== b.typeScoreObj.positionScore) return a.typeScoreObj.positionScore - b.typeScoreObj.positionScore;
                return a.typeScoreObj.totalFeatures - b.typeScoreObj.totalFeatures;
            }
            return a.product.name.localeCompare(b.product.name);
        } else {
            if (selectedTypes.length === 0) return 0;
            if (a.typeScoreObj.positionScore === b.typeScoreObj.positionScore) return a.typeScoreObj.totalFeatures - b.typeScoreObj.totalFeatures;
            return a.typeScoreObj.positionScore - b.typeScoreObj.positionScore;
        }
    });

    const sortedProducts = scored.map(s => s.product);
    const suffix = translations[currentLang].productCountSuffix || 'produse';
    document.getElementById('productCount').textContent = `${sortedProducts.length} ${suffix}`;

    if (sortedProducts.length === 0) {
        grid.innerHTML = `<div class="no-results"><h3>${translations[currentLang].noResultsTitle}</h3><p>${translations[currentLang].noResultsHint}</p></div>`;
        return;
    }

    // Construim HTML pentru fiecare produs: întâi calculăm offersHtml și priceDisplay în interiorul funcției
    const itemsHtml = sortedProducts.map(product => {
        // imagine (folosește imageUrl dacă există)
        const imgSrc = (typeof imageUrl === 'function') ? imageUrl(product.image) : product.image;
        const imageHtml = product.image ? `<a href="${product.link}" target="_blank"><img src="${imgSrc}" alt="${product.name} - ${product.type} Diamex pentru câini" itemprop="image" loading="lazy" style="width:100%; object-fit:cover; border-radius:8px; margin-bottom:15px;"></a>` : '';

        // offers / AggregateOffer
        let offersHtml = '';
        let priceDisplay = '';

        if (Array.isArray(product.offers) && product.offers.length) {
            const numericPrices = product.offers.map(o => parseFloat(o.price)).filter(p => !isNaN(p));
            const low = numericPrices.length ? Math.min(...numericPrices) : null;
            const high = numericPrices.length ? Math.max(...numericPrices) : null;
            const currency = product.priceCurrency || (product.offers[0] && (product.offers[0].priceCurrency || product.offers[0].currency)) || 'EUR';

            priceDisplay = (low !== null && high !== null) ? (low === high ? `${low} ${currency}` : `${low} - ${high} ${currency}`) : '';

            // build nested offers markup
            const nestedOffers = product.offers.map(o => {
                const oPrice = o.price ? `<meta itemprop="price" content="${o.price}" />` : '';
                const oCurrency = (o.priceCurrency || o.currency) ? `<meta itemprop="priceCurrency" content="${o.priceCurrency || o.currency}" />` : '';
                const oAvailability = o.availability ? `<link itemprop="availability" href="https://schema.org/${o.availability}" />` : '';
                const oUrl = o.url ? `<link itemprop="url" href="${o.url}" />` : '';
                const oSeller = o.seller ? `<meta itemprop="seller" content="${o.seller}" />` : '';
                const oPriceValidUntil = o.priceValidUntil ? `<meta itemprop="priceValidUntil" content="${o.priceValidUntil}" />` : '';
                return `<div itemprop="offers" itemscope itemtype="https://schema.org/Offer">${oPrice}${oCurrency}${oAvailability}${oUrl}${oSeller}${oPriceValidUntil}</div>`;
            }).join('');

            offersHtml = `<div itemprop="offers" itemscope itemtype="https://schema.org/AggregateOffer">
                <link itemprop="url" href="${product.link}" />
                ${low !== null ? `<meta itemprop="lowPrice" content="${low.toFixed(2)}" />` : ''}
                ${high !== null ? `<meta itemprop="highPrice" content="${high.toFixed(2)}" />` : ''}
                <meta itemprop="offerCount" content="${product.offers.length}" />
                <meta itemprop="priceCurrency" content="${currency}" />
                ${nestedOffers}
            </div>`;
        } else if (product.price) {
            const priceNum = parseFloat(product.price);
            const priceStr = isNaN(priceNum) ? product.price : priceNum.toFixed(2);
            const currency = product.priceCurrency || 'EUR';
            priceDisplay = `${priceStr} ${currency}`;

            offersHtml = `<div itemprop="offers" itemscope itemtype="https://schema.org/AggregateOffer">
                <link itemprop="url" href="${product.link}" />
                <meta itemprop="lowPrice" content="${priceStr}" />
                <meta itemprop="highPrice" content="${priceStr}" />
                <meta itemprop="offerCount" content="1" />
                <meta itemprop="priceCurrency" content="${currency}" />
                <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                    <meta itemprop="price" content="${priceStr}" />
                    <meta itemprop="priceCurrency" content="${currency}" />
                    <link itemprop="url" href="${product.link}" />
                    ${ product.availability ? `<link itemprop="availability" href="https://schema.org/${product.availability}" />` : '' }
                </div>
            </div>`;
        } else {
            // minimal AggregateOffer to satisfy GSC
            offersHtml = `<div itemprop="offers" itemscope itemtype="https://schema.org/AggregateOffer">
                <link itemprop="url" href="${product.link}" />
            </div>`;
            priceDisplay = '';
        }

        // row with type (left) and price (right)
        const priceHtml = priceDisplay ? `<span class="product-price">${priceDisplay}</span>` : '';
        const typeAndPriceRow = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span class="product-type">${translateCategoryLabel(product.type)}</span>
            ${priceHtml}
        </div>`;

        const sizesHtml = `<div class="product-sizes">${product.sizes.map(size => `<span class="size-badge" itemprop="size">${size}</span>`).join('')}</div>`;
        const featuresHtml = `<div class="product-features" itemprop="description">${product.features.map(feature => `<span class="feature-tag">${translateFeatureLabel(feature)}</span>`).join('')}</div>`;

        return `
            <article class="product-card" itemscope itemtype="https://schema.org/Product">
                ${imageHtml}
                ${typeAndPriceRow}
                <h4 itemprop="name">${product.name}</h4>
                <meta itemprop="brand" content="Laboratoire Diamex">
                <link itemprop="url" href="${product.link}">
                ${offersHtml}
                ${sizesHtml}
                ${featuresHtml}
            </article>
        `;
    }).join('');

    grid.innerHTML = itemsHtml;
}





    function clearAllFilters() {
        const input = document.getElementById('searchInput');
        if (input) input.value = '';
        searchQuery = '';
        selectedCategories = []; selectedSizes = []; selectedTypes = [];
        updateFilterButtons(); renderProducts();
    }

    function translateCategoryLabel(internal) {
        const idx = categoriesInternal.indexOf(internal);
        if (idx !== -1) return translations[currentLang].categories[idx] || internal;
        return internal;
    }

    function translateFeatureLabel(internal) {
        const idx = typesInternal.indexOf(internal);
        if (idx !== -1) return translations[currentLang].types[idx] || internal;
        return internal;
    }

    function changeLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        document.documentElement.lang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
        updateMetaTags(lang);
        renderFilters();
        updateUITexts();
        renderProducts();
    }

    function updateUITexts() {
        const t = translations[currentLang] || translations.en;
        document.getElementById('headerSubtitle').textContent = t.headerSubtitle;
        document.getElementById('categoryHeading').textContent = t.categoryHeading;
        document.getElementById('sizeHeading').textContent = t.sizeHeading;
        document.getElementById('typeHeading').textContent = t.typeHeading;
        document.getElementById('nameHeading').textContent = t.nameHeading;
        document.getElementById('searchInput').placeholder = t.searchPlaceholder;
        document.getElementById('clearFiltersBtn').textContent = t.clearFilters;
        document.getElementById('whyTitle').textContent = t.whyTitle;
        document.getElementById('whyText').textContent = t.whyText;
        document.getElementById('ourRangeTitle').textContent = t.ourRangeTitle;
        const l1 = document.getElementById('ourRangeList1');
        const l2 = document.getElementById('ourRangeList2');
        const l3 = document.getElementById('ourRangeList3');
        const l4 = document.getElementById('ourRangeList4');
        if (l1) l1.textContent = t.ourRangeList1;
        if (l2) l2.textContent = t.ourRangeList2;
        if (l3) l3.textContent = t.ourRangeList3;
        if (l4) l4.textContent = t.ourRangeList4;
        const footerText = document.getElementById('footerText');
        if (footerText) footerText.textContent = t.footer || '';
    }

    function initFromURL() {
        const params = new URLSearchParams(window.location.search);
        if (params.has('categorie')) selectedCategories = params.get('categorie').split(',').filter(Boolean);
        if (params.has('cantitate')) selectedSizes = params.get('cantitate').split(',').filter(Boolean);
        if (params.has('tip')) selectedTypes = params.get('tip').split(',').filter(Boolean);
        if (params.has('cautare')) {
            searchQuery = params.get('cautare') || '';
            const input = document.getElementById('searchInput');
            if (input) input.value = searchQuery;
        }
    }

    init();