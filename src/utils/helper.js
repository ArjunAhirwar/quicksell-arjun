import { BiRadioCircle } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import { ReactComponent as Logo3 } from './No-priority.svg';
import { ReactComponent as Logo4 } from './Img - Low Priority.svg';
import { ReactComponent as Logo5 } from './Img - Medium Priority.svg';
import { ReactComponent as Logo6 } from './Img - High Priority.svg';
import { ReactComponent as Logo7 } from './SVG - Urgent Priority colour.svg';

import { ReactComponent as Logo9 } from './Backlog.svg';
import { ReactComponent as Logo10 } from './To-do.svg';
import { ReactComponent as Logo11 } from './in-progress.svg';
import { ReactComponent as Logo12 } from './Done.svg';
import { ReactComponent as Logo13 } from './Cancelled.svg';

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 'No priority':
      return <Logo3 />;
    case 'Low':
      return <Logo4 />;
    case 'Medium':
      return <Logo5 />;
    case 'High':
      return <Logo6 />;
    case 'Urgent':
      return <Logo7 />;
    default:
      return <AiFillWarning color="#fc7840" size={14} />;
  }
};

export const getStatusIcon = (priority) => {
  switch (priority) {
    case 'Backlog':
      return <Logo9 />;
    case 'Todo':
      return <Logo10 />;
    case 'In progress':
      return <Logo11 />;
    case 'Done':
      return <Logo12 />;
    case 'Canceled':
      return <Logo13 />;
    default:
      return <AiFillCloseCircle color="#94a2b3" size={16} />;
  }
};
