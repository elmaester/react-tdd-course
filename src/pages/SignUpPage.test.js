import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";

describe("Sign Up Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignUpPage />);
      const header = screen.queryByRole("heading", { name: "Sign Up" });
      expect(header).toBeInTheDocument();
    });

    it("has username input", () => {
      render(<SignUpPage />);
      const usernameInput = screen.getByLabelText("Username");
      expect(usernameInput).toBeInTheDocument();
    });

    it("has email input", () => {
      render(<SignUpPage />);
      const emailInput = screen.getByLabelText("Email");
      expect(emailInput).toBeInTheDocument();
    });

    it("has password input", () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText("Password");
      expect(passwordInput).toBeInTheDocument();
    });

    it("has password type for password input", () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText("Password");
      expect(passwordInput.type).toBe("password");
    });

    it("has repeat password input", () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText("Repeat password");
      expect(passwordInput).toBeInTheDocument();
    });

    it("has password type for repeat password input", () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText("Repeat password");
      expect(passwordInput.type).toBe("password");
    });

    it("has Sign Up button", () => {
      render(<SignUpPage />);
      const button = screen.queryByRole("button", { name: "Sign Up" });
      expect(button).toBeInTheDocument();
    });

    it("disables the Sign Up button initially", () => {
      render(<SignUpPage />);
      const button = screen.queryByRole("button", { name: "Sign Up" });
      expect(button).toBeDisabled();
    });
  });
  describe("Interactions", () => {
    it("enables the submit button when password fields have the same value and sufficient length", () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText("Password");
      const repeatPasswordInput = screen.getByLabelText("Repeat password");
      userEvent.type(passwordInput, "P4ssword");
      userEvent.type(repeatPasswordInput, "P4ssword");
      const button = screen.queryByRole("button", { name: "Sign Up" });
      expect(button).toBeEnabled();
    });
    it("sends username, email and password to the backend after clicking the button", async () => {
      let requestBody;
      const server = setupServer(
        rest.post("/api/1.0/users", (req, res, ctx) => {
          requestBody = req.body;
          return res(ctx.status(200));
        })
      );
      server.listen();
      render(<SignUpPage />);
      const usernameInput = screen.getByLabelText("Username");
      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
      const repeatPasswordInput = screen.getByLabelText("Repeat password");
      userEvent.type(usernameInput, "user1");
      userEvent.type(emailInput, "user1@mail.com");
      userEvent.type(passwordInput, "P4ssword");
      userEvent.type(repeatPasswordInput, "P4ssword");
      const button = screen.queryByRole("button", { name: "Sign Up" });

      userEvent.click(button);

      await new Promise((resolve) => setTimeout(resolve, 500));

      expect(requestBody).toEqual({
        username: "user1",
        email: "user1@mail.com",
        password: "P4ssword",
      });
    });
  });
});
