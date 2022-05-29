const Form = ({ formData, submitHandler, changeHandler }) => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={changeHandler}
        />
        <br />
        <label>Description: </label>
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={changeHandler}
        />
        <br />
        <label>Artist: </label>
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={changeHandler}
        />
        <br />
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={changeHandler}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
