import { Server } from "miragejs";
import { makeServer, ITEMS_LIST } from "./mockApi";
import { QuestionsListDto } from "../models/questions";

describe("Mock API Service", () => {
  let server: Server;

  beforeAll(() => {
    server = makeServer({ environment: "test" });
  });

  afterAll(() => {
    server.shutdown();
  });

  describe("GET /api/questions", () => {
    it("should return the list of questions", async () => {
      const response = await fetch("/api/questions");
      const data: QuestionsListDto = await response.json();
      expect(data.questions).toEqual(ITEMS_LIST);
    });
  });

  describe("POST /api/questions", () => {
    it("should return the posted data", async () => {
      const postData = { answer: "Yes" };
      const response = await fetch("/api/questions", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" },
      });
      const responseData = await response.json();
      expect(responseData).toEqual(postData);
    });
  });
});
