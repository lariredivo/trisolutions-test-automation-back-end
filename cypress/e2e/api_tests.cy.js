describe("API Tests - JSONPlaceholder", () => {
  
  it("✅ GET - Deve retornar uma lista de posts", () => {
    cy.request("GET", "/posts").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("❌ GET - Deve falhar ao buscar um post inexistente", () => {
    cy.request({
      method: "GET",
      url: "/posts/999999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("✅ POST - Deve criar um novo post", () => {
    cy.request("POST", "/posts", {
      title: "Novo Post",
      body: "Conteúdo do post",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
    });
  });

  it("✅ PUT - Deve atualizar um post", () => {
    cy.request("PUT", "/posts/1", {
      id: 1,
      title: "Título Atualizado",
      body: "Novo conteúdo",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("Título Atualizado");
    });
  });

  it("✅ DELETE - Deve excluir um post", () => {
    cy.request("DELETE", "/posts/1").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

});
