const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Company Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Total Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO:map hobey backend thekey user entry newer por */}
            {/* row 1 */}

            <tr className="hover">
              <th>1</th>
              <td>Dhaka,Bangladesh</td>
              <td>8:10am</td>
              <td>5:30pm</td>
              <td>8.20min</td>
              <td>225tk</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Chittagong</td>
              <td>7:50am</td>
              <td>8:10pm</td>
              <td>12h</td>
              <td>320tk</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Barishal</td>
              <td>8:00am</td>
              <td>6:40pm</td>
              <td>9:40min</td>
              <td>280tk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
