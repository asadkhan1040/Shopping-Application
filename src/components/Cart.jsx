import { useDispatch, useSelector } from "react-redux";
import { decremetQty, incremetQty, removeitem } from "../redux/CartSlice";

function Cart() {
  const selectorData = useSelector((state) => state.carts.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Cart Called</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {selectorData.map((data, index) => {
              console.log("data is" + JSON.stringify(data));
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.produtdata.id}</td>
                  <td>
                    <img
                      src={data.produtdata.thumbnail}
                      className="img-circle"
                      height={100}
                      width={100}
                    />
                  </td>
                  <td>{data.produtdata.title}</td>
                  <td>{data.produtdata.price}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => dispatch(decremetQty(data.produtdata.id))}
                    >
                      -
                    </button>
                    &nbsp;&nbsp; {data.qty} &nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(incremetQty(data.produtdata.id))}
                    >
                      +
                    </button>
                  </td>
                  <td>{data.produtdata.price * data.qty}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeitem(data.produtdata.id))}
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Cart;
