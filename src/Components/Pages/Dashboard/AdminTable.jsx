const AdminTable = () => {
  return (
    <div>
      <h1 className="text-center text-4xl my-4 font-bold">Current User</h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Place Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Total</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Kerella</td>
              <td>8:13am</td>
              <td>9:20pm</td>
              <td>12.33h</td>
              <td>300tk</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Chennai</td>
              <td>8:13am</td>
              <td>9:20pm</td>
              <td>12.33h</td>
              <td>300tk</td>
            </tr>
            <tr>
              <th>3</th>
              <td>UttorProdesh</td>
              <td>8:13am</td>
              <td>9:20pm</td>
              <td>12.33h</td>
              <td>300tk</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Kolkata</td>
              <td>8:13am</td>
              <td>9:20pm</td>
              <td>12.33h</td>
              <td>300tk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
