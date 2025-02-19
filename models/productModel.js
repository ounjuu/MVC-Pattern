//모달
const data = {
  users: [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      age: 25,
      address: "123 Main St, NY",
      isActive: true,
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      age: 30,
      address: "456 Oak Ave, CA",
      isActive: false,
    },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      age: 28,
      address: "789 Pine Rd, TX",
      isActive: true,
    },
  ],
  categories: [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Furniture" },
    { id: 3, name: "Clothing" },
  ],
  products: [
    {
      id: 101,
      name: "Laptop",
      price: 1200,
      categoryId: 1,
      stock: 10,
      rating: 4.5,
    },
    {
      id: 102,
      name: "Phone",
      price: 800,
      categoryId: 1,
      stock: 15,
      rating: 4.7,
    },
    { id: 103, name: "Sofa", price: 500, categoryId: 2, stock: 5, rating: 4.2 },
    {
      id: 104,
      name: "T-shirt",
      price: 20,
      categoryId: 3,
      stock: 50,
      rating: 4.8,
    },
  ],
  orders: [
    {
      orderId: 1001,
      userId: 1,
      productId: 101,
      quantity: 1,
      status: "Shipped",
      totalAmount: 1200,
    },
    {
      orderId: 1002,
      userId: 2,
      productId: 102,
      quantity: 2,
      status: "Processing",
      totalAmount: 1600,
    },
    {
      orderId: 1003,
      userId: 3,
      productId: 104,
      quantity: 3,
      status: "Delivered",
      totalAmount: 60,
    },
  ],
  payments: [
    {
      paymentId: 2001,
      orderId: 1001,
      userId: 1,
      method: "Credit Card",
      status: "Paid",
    },
    {
      paymentId: 2002,
      orderId: 1002,
      userId: 2,
      method: "PayPal",
      status: "Pending",
    },
    {
      paymentId: 2003,
      orderId: 1003,
      userId: 3,
      method: "Bank Transfer",
      status: "Paid",
    },
  ],
  reviews: [
    {
      reviewId: 3001,
      userId: 1,
      productId: 101,
      rating: 5,
      comment: "Great laptop!",
    },
    {
      reviewId: 3002,
      userId: 2,
      productId: 102,
      rating: 4,
      comment: "Good phone, but battery life could be better.",
    },
    {
      reviewId: 3003,
      userId: 3,
      productId: 104,
      rating: 5,
      comment: "Very comfortable and good quality.",
    },
  ],
};

const datas = [data];
const bobdata = data.users;
const orderdata = data.orders;

//1.통합 데이터 출력 (users,categories,products,orders,payments,reviews )
const allData = () => {
  return datas;
};
//2.유저중 Bob의 orders,payments,reviews 출력
const bob = () => {
  return bobdata.filter((userdata) => {
    return userdata.name === "Bob";
  });
};
//3. 가장 비싼걸 산 유저의 모든 데이터와 ,해당 주문 내역, 카테고리 출력

const findmostExpensive = () => {
  const findExpensive = orderdata.reduce((arr, cur) => {
    return arr.totalAmount < cur.totalAmount ? cur : arr;
  }, orderdata[0]);

  const orderuser = data.users.find(
    (order) => order.id === findExpensive.userId
  );

  const ordered = data.orders.find(
    (order) => order.orderId === findExpensive.orderId
  );

  const findproductId = data.products.find((order) => {
    return Number(order.id) === Number(findExpensive.productId);
  });

  const category = data.categories.find((order) => {
    return order.id === findproductId.categoryId;
  });

  return {
    orderuser: orderuser,
    ordered: ordered,
    findproductId: findproductId,
  };
};
console.log(findmostExpensive(), "비싸?");
module.exports = { allData, bob, findmostExpensive };
