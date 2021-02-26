import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                this.props.emotions.map(item => {
                  return <tr><td>{item[0]}</td><td>{item[1]}</td></tr>
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
