import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header title", () => {
	render(<App />);
	const headerText = screen.getByText(/Be More Green!/i);
	expect(headerText).toBeInTheDocument();
});
