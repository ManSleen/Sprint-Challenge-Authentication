const request = require("supertest");

const db = require("../database/dbConfig");

const server = require("../api/server.js");

describe("HTTP Request Tests", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("tests are running with DB_ENV set to 'testing'", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("returns a 200 OK message", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
