// menuData.js
export const menuData = {
  categories: [
    { id: 'pizza', name: 'Pizza' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'starters', name: 'Starters' },
  ],
  items: {
    pizza: [
      { id: 'margherita', name: 'Margherita', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726234743/pizza3_gvyydt.jpg', price: '$12.50', description: 'Fresh tomatoes, fresh mozzarella, fresh basil' },
      { id: 'formaggio', name: 'Formaggio', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726234744/pizza2_qntnws.jpg', price: '$15.50', description: 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)' },
      { id: 'meat-town', name: 'Meat Town', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726234743/pizza1_wmidbl.jpg', price: '$20.00', description: 'Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken' },
    ],
    pasta: [
      { id: 'lasagna', name: 'Lasagna', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726234762/pasta2_k5m0jd.jpg', price: '$13.50', description: 'Special sauce, mozzarella, parmesan, ground beef' },
      { id: 'ravioli', name: 'Ravioli', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726234758/pasta1_rbx5xw.jpg', price: '$14.50', description: 'Ravioli filled with cheese' },
      { id: 'spaghetti-classica', name: 'Spaghetti Classica', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726867348/pasta3_xadyzx.jpg', price: '$11.00', description: 'Fresh tomatoes, onions, ground beef' },
    ],
    starters: [
      { id: 'soup', name: 'Today\'s Soup', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726867348/soup_ws5rlu.jpg', price: '$5.50', description: 'Ask the waiter' },
      { id: 'bruschetta', name: 'Bruschetta', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726867348/bruschetta_lv19b3.jpg', price: '$8.50', description: 'Bread with pesto, tomatoes, onion, garlic' },
      { id: 'garlic-bread', name: 'Garlic Bread', imgSrc: 'https://res.cloudinary.com/dddpy66ut/image/upload/v1726867348/garlic-bread_epwt3p.jpg', price: '$9.50', description: 'Grilled ciabatta, garlic butter, onions' },
    ],
  }
};
