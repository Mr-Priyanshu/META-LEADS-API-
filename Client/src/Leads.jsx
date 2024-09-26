import { useState, useEffect } from 'react';
import axios from 'axios';
import CircleLoader from "react-spinners/CircleLoader";

const LeadsTable = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(leads, 'check data save or not in state');
  

  // Meta API Token
  const ACCESS_TOKEN = 'EAAMAWRBboPIBO87PPmdJdsBd0WjJUw3GZBhYaS1fzmHE97k41JXyRIMhjTmV6lk3VGRRZCJvlrF2fZAJJgANlIwVosGuH30Qaz5eAimreSB57CNisVZArX5tLke0JqMkhZBDuJdlhXlGA5SZBSa1BQjZBUqBVNdUiUXmsPoZB7212Wg2rlPaNelheIlVm1g6Dc96APXfMoX7';

  // Meta API formId 
  const formId = 1564826437399879;

  // Fetch Leads Data
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get(`https://graph.facebook.com/v20.0/${formId}/leads?access_token=${ACCESS_TOKEN}`);

        setLeads(response.data.data); // assuming data is in response.data.data
        console.log(setLeads, 'Fetch Data State 25 me');
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch leads data');
        setLoading(false);
        console.log(err);
        
      }
    };

    fetchLeads();
  }, [formId]);

  const extractFieldValue = (fieldData, fieldName) => {
    const field = fieldData.find(item => item.name === fieldName);
    return field ? field.values[0] : '';
  };

  // if (loading) return <div>Loading...</div>;
  if (loading) return <div><center><CircleLoader color="red" /></center></div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Leads Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Lead S.no</th>
              <th className="py-2 px-4 border-b">Lead ID</th>
              <th className="py-2 px-4 border-b">Full Name</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Street Address</th>
              <th className="py-2 px-4 border-b">Date Created</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={lead.id}>
                <td className="py-2 px-4 border-b">{index+1}</td>
                <td className="py-2 px-4 border-b">{lead.id}</td>
                <td className="py-2 px-4 border-b">{extractFieldValue(lead.field_data, 'full_name')}</td>
                <td className="py-2 px-4 border-b">{extractFieldValue(lead.field_data, 'phone_number')}</td>
                <td className="py-2 px-4 border-b">{extractFieldValue(lead.field_data, 'street_address')}</td>
                <td className="py-2 px-4 border-b">{new Date(lead.created_time).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
