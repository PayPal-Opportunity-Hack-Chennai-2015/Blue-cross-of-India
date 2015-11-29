var smartphones = [
					{
						name:"Apple iPhone 6",
						manufacturer:"Apple",
						price:"40000",
						size:"5-inch",
						camera:"8 MP",
						OS:"iOS",
						processor:"A8",
						memory:"16 GB",
						ram:"1 GB",
						image:"img/smartphone/iphone6.jpg"
					},
					{
						name:"Apple iPhone 5S",
						manufacturer:"Apple",
						price:"29000",
						size:"4-inch",
						camera:"8 MP",
						OS:"iOS",
						processor:"A7",
						memory:"16 GB",
						ram:"1 GB",
						image:"img/smartphone/iphone5s.jpg"
					}, 
					{
					    name: "Google Nexus 5",
					    manufacturer: "LG",
					    price: "20000",
					    size: "5-inch",
					    camera: "8 MP",
					    OS: "Android",
					    processor: "2.3 GHz Snapdragon 800",
					    memory: "16 GB",
					    ram: "2 GB",
					    image: "img/smartphone/nexus5.jpg"
					}, {
					    name: "HTC Desire 620G",
					    manufacturer: "HTC",
					    price: "11000",
					    size: "5-inch",
					    camera: "8 MP",
					    OS: "Android",
					    processor: "1.7 GHz MediaTek ",
					    memory: "8 GB",
					    ram: "1 GB",
					    image: "img/smartphone/htc620g.jpg"
					}, {
					    name: "Asus Zenfone 5",
					    manufacturer: "Asus",
					    price: "14000",
					    size: "5-inch",
					    camera: "8 MP",
					    OS: "Android",
					    processor: "1.7 GHz Intel Atom ",
					    memory: "6 GB",
					    ram: "2 GB",
					    image: "img/smartphone/asus5.jpg"
					}, {
					    name: "Redmi 2 Prime 4G",
					    manufacturer: "Mi",
					    price: "7000",
					    size: "5-inch",
					    camera: "8 MP",
					    OS: "Android",
					    processor: "1.2 GHz Snapdragon 410 ",
					    memory: "16 GB",
					    ram: "2 GB",
					    image: "img/smartphone/redmi2prime.jpg"
					}, {
					    name: "OnePlus One",
					    manufacturer: "OnePlus",
					    price: "21000",
					    size: "5-inch",
					    camera: "13 MP",
					    OS: "Android",
					    processor: "2.5 GHz Snapdragon 801 ",
					    memory: "32 GB",
					    ram: "3 GB",
					    image: "img/smartphone/oneplusone.jpg"
					}, {
					    name: "Motorola Moto G3",
					    manufacturer: "Motorola",
					    price: "13000",
					    size: "5-inch",
					    camera: "13 MP",
					    OS: "Android",
					    processor: "1.4 GHz Snapdragon 410 ",
					    memory: "16 GB",
					    ram: "2 GB",
					    image: "img/smartphone/motog.jpg"
					}
				];

var laptops = [{name:"Apple MacBook Air",manufacturer:"Apple",price:"62000",weight:"1.4 kg",size:"13-inch",ram:"4 GB",hdd:"128 GB",processor:"Intel i5",image:"img/laptops/apple_air.jpg"},{name:"Dell XPS 13 Ultrabook",manufacturer:"Dell",price:"95000",weight:"1.4 kg",size:"13-inch",ram:"8 GB",hdd:"256 GB",processor:"Intel i7",image:"img/laptops/dell_xps13.jpg"},{name:"MSI GT72 2QD",manufacturer:"MSI",price:"169000",weight:"3.7 kg",size:"17-inch",ram:"16 GB",hdd:"1024 GB",processor:"Intel i7",image:"img/laptops/msi_gt72.jpg"},{name:"ASUS G751JL",manufacturer:"Asus",price:"129000",weight:"3.5 kg",size:"17-inch",ram:"24 GB",hdd:"1024 GB",processor:"Intel i7",image:"img/laptops/asus_g751.jpg"},{name:"Dell Inspiron 3542",manufacturer:"Dell",price:"28000",weight:"2.4 kg",size:"15-inch",ram:"4 GB",hdd:"500 GB",processor:"Intel i3",image:"img/laptops/dell_3542.jpg"},{name:"HP 15-SC98TU",manufacturer:"HP",price:"27800",weight:"2.3 kg",size:"15-inch",ram:"4 GB",hdd:"500 GB",processor:"Intel i3",image:"img/laptops/hp_15.jpg"},{name:"Lenovo G50-80",manufacturer:"Lenovo",price:"26000",weight:"2.5 kg",size:"15-inch",ram:"4 GB",hdd:"1024 GB",processor:"Intel i3",image:"img/laptops/lenovo_g50.jpg"},{name:"Dell 3148",manufacturer:"Dell",price:"35000",weight:"1.4 kg",size:"11-inch",ram:"4 GB",hdd:"500 GB",processor:"Intel i3",image:"img/laptops/dell_3148.jpg"}];

var laptop_questions = [

				{

					question: "What kind of laptop are you looking for?",
					options : [  {  
									answer: "Budget Friendly", 
									score: { r: 2, c: 1, w: 4, p: 3, h: 2  }  
								},
								{
									answer: "Gaming", 
									score: { r: 5, c: 5, w: 2, p: 4, h: 4 }
								},
								{
									answer: "Everyday Use",
									score: { r: 2, c: 2, w: 4, p: 3, h: 2 }
								}
							]
				},

				{
					question: "What is your storage expectation?",
					options: [ {
									answer: "High Storage",
									score : { r: 3, c: 4, w: 2, p: 3, h: 5  }
								},
								{
									answer: "Moderate Storage",
									score : { r: 3, c: 3, w: 3, p: 2, h:3 }
								},
								{
									answer: "Low Storage",
									score : { r: 2, c: 2, w: 3, p: 2, h: 2}
								}
					]
				},

				{
					question: "How portable do you need your laptop?",
					options: [ {
									answer: "Light Weight",
									score : { r: 3, c: 5, w: 5, p:3, h: 2  }
								},
								{
									answer: "More Sturdy",
									score : { r: 5, c: 5, w: 1, p: 5, h:5 }
								}
					]
				}

		];

var laptop_trained = [ 
	{ 
		input : {
			r : 2,
			h : 1,
			w : 5,
			p : 5,
			c : 3
		},

		output : {
			"Apple Macbook Air" : 1,
		}
	},

	{
		input : {
			r : 4,
			h : 3,
			w : 5,
			p : 5,
			c : 4
		},
		output : {
			"Dell XPS 13 Ultrabook" : 1
		}
	},
	{
	 input : {
	    r : 5,
			h : 4,
			w : 2,
			p : 5,
			c : 4
	 },
	 output : {
	   "MSI GT72 2QD" :1
	 }
	},
	{
	  input: {
	    r: 5,
			h : 4,
			w : 2,
			p : 5,
			c : 4
	    
	  },
	  output : {
	    "ASUS G751JL" :1
	  }
	},
	{
	  input : {
	      r: 3,
			h : 3,
			w : 3,
			p : 3,
			c : 1
	  },
	  output : {
	    "Dell Inspiron 3542" :1
	  }
	},
		{
	  input : {
	      r: 3,
			h : 3,
			w : 3,
			p : 3,
			c : 1
	  },
	  output : {
	    "HP 15-SC98TU" :1
	  }
	},
		{
	  input : {
	      r: 3,
			h : 4,
			w : 3,
			p : 3,
			c : 2
	  },
	  output : {
	    "Lenovo G50-80" :1
	  }
	},
		{
	  input : {
	      r: 3,
			h : 3,
			w : 5,
			p : 3,
			c : 2
	  },
	  output : {
	    "Dell 3148" :1
	  }
	}
];

var smartphone_questions = [

				{
					question: "What is your preferred Screen Size?",
					options: [ {
									answer: "Normal",
									score : { s: 4  }
								},
								{
									answer: "Large",
									score : { s: 5 }
								},
								{
									answer: "Smaller",
									score: { s: 3 }
								}
							]
				},

				{
					question: "What is your pricing preference?",
					options: [ {
									answer: "Budget Friendly",
									score : { p: 1, r: 1, m: 1, c: 2  }
								},
								{
									answer: "Expensive",
									score : { p: 5, r: 5, m: 5, c: 5 }
								},
								{
									answer: "Somewhere Moderate",
									score : { p: 3, r: 3, m: 3, c: 4 }
								}
							]
				},

				{
					question: "What is your memory requirements & camera?",
					options : [ {
									answer: "High",
									score : { m: 5, p: 4, c: 5 }
								},
								{
									answer: "Moderate",
									score : { o: 1, p: 5, c: 3 }
								},
								{
									answer: "Doesn't matter",
									score : { o: 3, p: 3, c: 4 }
								}
							]
				},

				{
					question: "Which of the following is your interest?",
					options : [ {
									answer: "Games & Apps",
									score : { o: 5, p: 3, r: 5, m: 4 }
								},
								{
									answer: "Internet & Social Media",
									score : { o: 1,  }
								},
								{
									answer: "Doesn't matter",
									score : { o: 3 }
								}
							]
				}
];

var smartphone_trained = [
  {
    input: {
      o : 1,
      p : 5,
      s : 5,
      c : 4,
      r : 3,
      m : 4
    },
    output: {
      "Apple iPhone 6" : 1,
    }
  },
  {
    input : {
      o : 1,
      p : 4,
      s : 4,
      c : 4,
      r : 3,
      m : 4
    },
    output : {
      "Apple iphone 5s" : 1,
    }
  },
  {
    input : {
      o : 5,
      p : 3,
      s : 5,
      c : 4,
      r : 4,
      m : 4
    },
    output : {
      "Google Nexus 5" : 1,
    }
  },
  {
    input : {
       o : 5,
      p : 1,
      s : 4,
      c : 4,
      r : 3,
      m : 3
    },
    output : {
      "HTC Desire 620G" : 1,
    }
  },
  {
    input : {
       o : 5,
      p : 3,
      s : 4,
      c : 4,
      r : 4,
      m : 2
    },
    output : {
      "Asus Zenfone 5" : 1,
    }
  },
  {
    input : {
       o : 5,
      p : 1,
      s : 4,
      c : 4,
      r : 4,
      m : 4
    },
    output : {
      "Redmi 2 Prime 4G" : 1,
    }
  },
  {
    input : {
       o : 5,
      p : 3,
      s : 4,
      c : 5,
      r : 5,
      m : 5
    },
    output : {
      "OnePlus One" : 1,
    }
  },
  {
    input : {
       o : 5,
      p : 2,
      s : 4,
      c : 5,
      r : 4,
      m : 4
    },
    output : {
      "Motorola Moto G3" : 1,
    }
  },
  
  
  ];


var books = [
  {
    name : "Make Me: A Jack Reacher Novel",
    genre :  "Literature & Fiction",
    rating : 4,
    manufacturer : "Lee Child",
    realese : "September 1, 2015",
    price : 136,
    image: "img/books/make_me_360.jpg"
  },
  {
     name : "Raging Heat",
    genre :  "Literature & Fiction",
    rating : 4.5,
    manufacturer : "Richard Castle",
    realese : "September 16th 2014", 
    price : 196,
    image: "img/books/raging_heat_360.jpg"
  },
 {
     name : "The Martian",
    genre :  " Action & Adventure Fiction",
    rating : 4.5,
    manufacturer : " Andy Weir",
    realese : "2011" ,
    price : 257,
    image: "img/books/the_martian_360.jpg"
  },
   {
     name : "Chanakya's 7 Secrets of Leadership",
    genre :  "Business & Economics",
    rating : 4,
    manufacturer : "Radhakrishnan Pillai",
    realese : "2013",
    price : 59,
    image: "img/books/chanakya_s_7_secrets_of_leadership_360.jpg"
  },
   {
     name : "Breaking Out and Making Big: A No-nonsense Book on Start-Ups and Entreprenurship",
    genre :  "Business & Economics",
    rating : 4,
    manufacturer : "Rudrajeet Desai",
    realese : "August 15 2014", 
    price : 350,
    image: "img/books/breaking_out_and_making_big_360.jpg"
  },
    {
     name : "The Way of the Runner: A journey into the fabled world of Japanese running",
    genre :  "Sports",
    rating : 5,
    manufacturer : "Adharanand Finn",
    realese : "31 March 2015",
    price : 406,
    image: "img/books/the_way_of_the_runner_360.jpg"
  },
  
  {
     name : "21 Ways to Write & Publish Your Non-Fiction Book",
    genre :  "Fantasy, Horror & Science Fiction",
    rating : 3,
    manufacturer : "Kristen Eckstein",
    realese : "14 September 2011",
    price : 955,
    image: "img/books/21_ways_to_write___publish_your_non-fiction_book_360.jpg"
  }
]


var books_trained = [ 
	{ 
		input : {
			g : 0.1,
			r : 4,
			d : 5,
			p : 2
		},

		output : {
			"Make Me: A Jack Reacher Novel" : 1,
		}
	},

	{
		input : {
	  	g : 0.1,
			r : 4.5,
			d : 4,
			p : 2
		},
		output : {
			"Raging Heat" : 1
		}
	},
	{
	 input : {
	  	g : 1,
			r : 4.5,
			d : 3,
			p : 3
	 },
	 output : {
	   "The Martian" :1
	 }
	},
	{
	  input: {
	  	g : 2,
			r : 4,
			d : 4,
			p : 1
	    
	  },
	  output : {
	    "Chanakya's 7 Secrets of Leadership" :1
	  }
	},
	{
	  input : {
	  	g : 2,
			r : 4,
			d : 4,
			p : 3
	  },
	  output : {
	    "Breaking Out and Making Big: A No-nonsense Book on Start-Ups and Entreprenurship" :1
	  }
	},
		{
	  input : {
	  	g : 3,
			r : 5,
			d : 5,
			p : 3
	  },
	  output : {
	    "The Way of the Runner: A journey into the fabled world of Japanese running" :1
	  }
	},
		{
	  input : {
	  	g : 4,
			r : 5,
			d : 3,
			p : 3
	  },
	  output : {
	    "The Silmarillion" :1
	  }
	},
		{
	  input : {
	  	g : 4,
			r : 3,
			d : 3,
			p : 5
	  },
	  output : {
	    "21 Ways to Write & Publish Your Non-Fiction Book" :1
	  }
	}
];

var books_questions = [

				{
					question: "What is your preferred Genre?",
					options: [ {
									answer: "Literature & Fiction",
									score : { g: 0.1, d : 5, p : 2  }
								},
								{
									answer: "Action & Adventure Fiction",
									score : { g: 1, d: 3, p: 3 }
								},
								{
									answer: "Business & Economics",
									score: { g: 3, d:2 }
								}
							]
				},

				{
					question: "What kind are your looking for?",
					options: [ {
									answer: "Released",
									score : { d: 3, r: 5, p: 3 }
								},
								{
									answer: "Upcoming",
									score : { d: 5, r: 5, p: 3 }
								},
								{
									answer: "Best Sellers",
									score : { d: 2, r: 5, p: 4 }
								}
							]
				},

				{
					question: "How expensive are you looking for?",
					options: [ {
									answer: "Expensive",
									score : { p: 5 }
								},
								{
									answer: "Budget Friendly",
									score : { p: 1 }
								},
								{
									answer: "Doesn't matter",
									score : { p: 3 }
								}
							]
				}
];