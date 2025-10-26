import { useReducer } from 'react';
import { CounterBox } from 'components/HooksUseReduserCounter/HooksUseReduserCounter.styled';

function counterReducer(state, action) {
  switch (action.type) {
    // case 'increment':
    //   return state + action.payload;

    // case 'decrement':
    //   return state - action.payload;

    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default:
      //   return state;
      throw new Error(`Unsuported action type ${action.type}`);
  }
}

// function init(initialstate) {
//   return {
//     ...initialstate,
//     count: initialstate.count + 10,
//   };
// }

export default function HooksUseReduserCounter() {
  const [state, dispatch] = useReducer(
    counterReducer,
    {
      count: 0,
    },
    // init,
  );

  return (
    <CounterBox>
      <h1>Счётчик</h1>
      <p>{state.count}</p>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        >
          Уменьшить
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
        >
          Увеличить
        </button>
      </div>
    </CounterBox>
  );
}
