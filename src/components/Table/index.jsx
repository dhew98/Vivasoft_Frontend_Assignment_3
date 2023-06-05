import { useEffect, useState } from 'react';
import TableRow from './TableRow';


const Table = () => {
  const [userRankingData, setUserRankingData] = useState([]);
  const [sortedUserRankingData, setSortedUserRankingData] = useState([]);
  const [asc, setAsc] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchUserRankingData = async () => {
      setLoading(true);
      const response = await fetch(
        'https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users'
      );
      const userData = await response.json();
      setUserRankingData(userData);
      sortUserRankingData(userData);
      setLoading(false);
    };

    fetchUserRankingData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = sortedUserRankingData.filter((row) => {
    return row.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortUserRankingData = usersData => {
    const temp = [...usersData];
    temp.sort((a, b) => (asc ? a.score - b.score : b.score - a.score));
    console.log(temp);
    setSortedUserRankingData(temp);
    setAsc(!asc);
  };

  return (
    <section class='mt-20'>
      <input
        type="text"
        className="form-control mb-4 w-75 mx-auto mt-5"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div class='flex justify-center items-center'>
        {loading || (userRankingData?.length ?? 0) <= 0 ? (
          <div className='w-full h-20 flex justify-center items-center'>
            Loading...
          </div>
        ) : (



          <table class="table table-striped w-75 mx-auto">
            <thead>
              <tr>
                <th class=''>Id</th>
                <th class=''>Name</th>
                <th class=''>Country</th>
                <th
                  onClick={() => sortUserRankingData(userRankingData)}
                  id='score_column'
                  style={{ cursor: "pointer" }}>
                  <span>Score</span>

                </th>
              </tr>
            </thead>

            <tbody id='table_body'>
              {filteredData?.map((userData, index) => {
                return (
                  <TableRow key={index} index={index} userData={userData} />
                );
              })}
            </tbody>

          </table>
        )}
      </div>
    </section>
  );
};

export default Table;
