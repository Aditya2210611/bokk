import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
          <tr  className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
                1
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              CN
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              Aditya
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              2020
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
             kk
            </td>
          </tr>
          <tr  className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
                2
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              CAMI
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              Aditya
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              2021
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
             kbkj
            </td>
          </tr>
          <tr  className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
                3
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              DAA
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              Aditya
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              2021
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
             kbkj
            </td>
          </tr>
      </tbody>
    </table>
  );
};

export default BooksTable;
