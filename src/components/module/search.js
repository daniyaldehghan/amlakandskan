import Form from "next/form";

function Search() {
  return (
    <Form
      action="/buy-reside"
      style={{
        marginBottom: "100px",
      }}
    >
      <button
        type="submit"
        style={{
          background: "blue",
          color: "#fff",
          marginLeft: "8px",
          padding: "5px",
        }}
      >
        جست و جو
      </button>
      <input
        name="category"
        placeholder="apartment,store,villa,office"
        style={{
          marginLeft: "8px",
          padding: "5px",
          fontSize: "1rem",
          width: "200px",
          outline: "none",
          border: "2px solid blue",
          fontWeight: "2rem",
        }}
      />
    </Form>
  );
}

export default Search;
