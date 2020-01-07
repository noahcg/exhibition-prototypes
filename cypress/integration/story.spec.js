describe("Testing for Rohingya Personal Stories", () => {
  it("Visits the story page prototype", () => {
    cy.visit("http://localhost:8080/rohingya/personal-story/#/story");
  });

  it("Checks for an intro section", () => {
    cy.get("section")
      .eq(0)
      .should("have.class", "story-intro");
  });

  it("Checks that the intro section has the proper elements", () => {
    cy.get(".story-intro")
      .children()
      .eq(0)
      .should("have.prop", "tagName", "FIGURE");

    cy.get(".story-intro")
      .children(".container")
      .find("div")
      .should("have.class", "mobile-screen");

    cy.get(".story-intro")
      .children(".container")
      .find("figure")
      .should("have.class", "story-featured-image");

    cy.get(".story-intro")
      .children(".container")
      .find(".intro-text")
      .children("p")
      .should("have.class", "page-title");

    cy.get(".story-intro")
      .children(".container")
      .find(".intro-text")
      .find("div")
      .should("have.class", "name-group");

    cy.get(".story-intro")
      .children(".container")
      .find(".intro-text")
      .find(".name-group")
      .children("p")
      .eq(0)
      .should("have.class", "name");

    cy.get(".story-intro")
      .children(".container")
      .find(".intro-text")
      .find(".name-group")
      .children("p")
      .eq(1)
      .should("have.class", "subtitle");
  });

  it("Checks for image alt tags", () => {
    cy.get("img").each($el => {
      if ($el.attr("role") == "presentation") {
        cy.wrap($el).should("not.have.attr", "alt");
      } else {
        cy.wrap($el).should("have.attr", "alt");
      }
    });
  });
});
