export default ({ body, title, state }) => (
  `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>

      <body>
        <div id="root">${body}</div>
      </body>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify({ ...state })};
      </script>
      <script src="bundle.js"></script>
    </html>
  `
);
