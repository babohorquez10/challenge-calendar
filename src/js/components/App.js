import React from 'react';
import Calendar from './Calendar';
import Form from './Form';

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <Calendar />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="modal fade" id="modalForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;