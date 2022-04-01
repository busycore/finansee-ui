import { Container } from "./styles";
import { HiOutlineXCircle } from "react-icons/hi";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Value</th>
            <th>Date</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mc Donalds</td>
            <td>Food</td>
            <td>$29.90</td>
            <td>26/12/2002</td>
            <td>
              <button className="delete-button">
                <HiOutlineXCircle size={24} />
              </button>
            </td>
          </tr>
          <tr>
            <td>Mc Donalds</td>
            <td>Food</td>
            <td>$29.90</td>
            <td>26/12/2002</td>
            <td>
              <button className="delete-button">
                <HiOutlineXCircle size={24} />
              </button>
            </td>
          </tr>
          <tr>
            <td>Mc Donalds</td>
            <td>Food</td>
            <td>$29.90</td>
            <td>26/12/2002</td>
            <td>
              <button className="delete-button">
                <HiOutlineXCircle size={24} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
