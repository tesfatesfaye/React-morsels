// attempterBoilerplate.js

const snippets = [
  {
    label: "Extract Code from Image",
    value: `Extract the code from the image if it’s written in LaTeX return it in a LaTeX code block. 
Underneath return whether or not it is written in inline Math mode or Display math mode in plain text, e.g., “Inline Math Mode” or “Display Math Mode”.`,
  },
  {
    label: "Type of LaTeX Code",
    value: `What LaTeX style of code is this? Is it inline or display math mode?`,
  },
  {
    label: "Can Prompt Be Solved",
    value: `Can the prompt be solved? *
Return Yes if the given prompt can be solved or has a clear solution.
Choose No if the prompt cannot be solved or lacks sufficient information to provide a solution. This helps to indicate whether the task is feasible.
REMEMBER: if the prompt is not solvable, then the hint should direct the model to the realization that it's unsolvable.`,
  },
  {
    label: "Final Answer",
    value: (latexStyle) =>
      `Determine the correct mathematical answer for the prompt above. The final answer should be in the simplest form (e.g., only include the answer; complete sentences are unnecessary; this should rarely be longer than a single line. Examples of acceptable answers: 7; 2\\pi; no solution; (0,4); x = 19, y = 0${
        latexStyle ? `, ${latexStyle}` : ""
      }.`,
  },
  {
    label: "Long Hint",
    value: ` Based on the question and answer. Provide a hint to the model. The hint should not include the full answer and should be written in natural language, similar to how a professor might help a student approach an unfamiliar problem. If applicable, use LaTeX for formulas and notations. Avoid vague hints; instead, ensure they are clear and suitable for someone with a solid mathematical background.
The hint should provide a plan or strategy to solve the problem, using concise instructions that guide the model toward solving the prompt. It should include key steps necessary to solve the problem, and mention any relevant theorems or equations that may be needed.
The goal of the hint is to guide the model onto the right track, offering general guidelines or suggested approaches without explicitly giving away the answer.
For example, consider the prompt: "Find all integers A, B, C such that ." A bad hint might simply say, "Remember the modulo operation." A better hint would be: "Find if there are any trivial solutions. Consider the equation (mod 7). What possible values (mod 7) can A, B, C have? A technique such as reductio ad infinitum may be needed."
Another example is the prompt: "Let be the field with 25 elements. Is every element of a sum of 18th powers?" A bad hint might say, "Try to compute the structure of the 18th powers" or "Show that the 18th powers are a proper subfield of ." A better hint would be: "Consider the non-zero elements of which form a cyclic group of order 24. Check that the non-zero 18th powers are also the non-zero 6th powers, and that these are a subgroup of of order 4. Including the zero element, there are 5 18th powers, and they form a subfield of order 5. Use the fact that a field is closed under addition."
Finally, consider the prompt: "Let A be a square matrix filled with zeros, except for the diagonal cells, which contain the numbers from 1 to n in alphabetical order. Find the trace of ." A bad hint might say, "Generate the matrix with the numbers from 1 to n on its diagonal. Sort the rows of the matrix according to the alphabetical order of the names of the numbers. Calculate , and sum the elements of its diagonal." A better hint would be: "The cube of a diagonal matrix is just the cubes of its diagonal elements, so the trace of is just the sum of the cubes of 1, 2, ..., n, regardless of the order. No need to sort the matrix. Use the formula for the sum of the cubes. "

`,
  },
  {
    label: "Short Hint",
    value: `Based on the question and answer, provide a hint to the model. The hint should not include the full answer and should be written in natural language, similar to how a professor might help a student approach an unfamiliar problem. If applicable, use LaTeX for formulas and notations. Avoid vague hints; instead, ensure they are clear and suitable for someone with a solid mathematical background. If I have provided you prior context through documentation, use those guides.`,
  },
  {
    label: "Return LaTeX Code",
    value: `Return the code in a LaTeX code block.`,
  },
  {
    label: "Include LaTeX Code Type",
    value: (latexStyle) =>
      `I want the LaTeX to be returned in the following format: ${latexStyle}`,
  },
];

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "20px",
  margin: "20px",
  marginTop: "20px",
};

export { snippets, style };
