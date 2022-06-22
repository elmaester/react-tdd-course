import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
  });
});
