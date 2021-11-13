// jest@26.4.2
const app = require("./server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

test("Call the / endpoint", async (done) => {
  const res = await request.get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("This App is running properly!");
  done();
});
test("Call the /ping endpoint", async (done) => {
  const res = await request.get("/ping");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Pong!");
  done();
});
test("Call the /youtube endpoint", async (done) => {
  const res = await request.get("/youtube");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello, youtube indonesia!");
  done();
});
test("Call the /hello/:name", async (done) => {
  const res = await request.get("/hello/zizsy");
  expect(res.status).toBe(200);
  expect(res.body.message).toBe("Hello zizsy");
  done();
});
