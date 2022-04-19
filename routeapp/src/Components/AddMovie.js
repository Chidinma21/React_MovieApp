import {useState} from "react"

const AddMovie = ({handleAdd}) => {
  // title, poster url, desc, rating
  const[mov, setMov] = useState("");
  const[url, setUrl] = useState("");
  const[desc, setDesc] = useState("");
  const[rate, setRate] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <form style={{ width: "50vw", border: "1px solid gray", padding: 20, borderRadius: 10}}>
        <div className="row g-3" style = {{paddingBottom: 15}}>
            <div className="col-sm-7">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Movie Title" 
                    value = {mov}
                    onChange={(e) => setMov(e.target.value)}
                />
            </div>
            <div class="col-sm">
                <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Rating" 
                    value = {rate}
                    onChange={(e) => setRate(e.target.value)}

                />
            </div>
        </div>
        <div className="mb-3">
            <input
                type="text"
                placeholder="Description"
                className="form-control"
                value = {desc}
                onChange={(e) => setDesc(e.target.value)}

            />        
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="PosterURL"
            className="form-control"
            value = {url}
            onChange={(e) => setUrl(e.target.value)}

          />
        </div>
        <div style ={{display: "flex", justifyContent: "center"}}>
        <button 
          type="button" 
          className="btn btn-danger" 
          onClick = {
            () => 
            handleAdd({
            id: Date.now(),
            title: mov,
            posterUrl: url,
            description: desc,
            rating: rate
          })}>
          Add
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;

