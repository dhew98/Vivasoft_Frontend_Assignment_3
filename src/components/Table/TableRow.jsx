

const TableRow = ({ userData, index }) => {
  const { name, country, score, id, photo } = userData ?? {};
  return (
    <tr>
      <td >
        {id}
      </td>
      <td >
        <div className='d-flex align-items-center mx-5'>
          <img
            src={photo}
            alt='profile'
            width={40}
            height={40}
            className='rounded-circle '
          />
          <p className="mx-3">{name}</p>
        </div>

      </td>
      <td >
        {country}
      </td>
      <td >
        {score}
      </td>
    </tr>
  );
};

export default TableRow;
