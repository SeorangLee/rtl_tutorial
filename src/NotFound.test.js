import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("renders header", () => {
    const { getByText } = render(<NotFound path="/abc" />);
    const header = getByText("Page Not Found");
    expect(header).toBeInTheDocument();
  });
  it("renders paragraph", () => {
    const { getByText } = render(<NotFound path="/abc" />);
    const paragraph = getByText(/^해당 페이지/);
    expect(paragraph).toHaveTextContent("해당 페이지(/abc)를 찾을 수 없습니다.");
  });
  it("renders image", () => {
    const { getByAltText } = render(<NotFound path="/abc" />);
    const image = getByAltText("404");
    expect(image).toHaveAttribute(
      "src",
      "https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
    );
  });
});