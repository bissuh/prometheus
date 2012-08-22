function tableMouseOver(obj) {
  obj.className = 'calendar-table-hover';
};

function tableMouseOut(obj) {
  obj.className='calendar-table';
};

function tableMouseDown(obj) {
  obj.className = 'calendar-table-active';
};

function tableMouseUp(obj) {
  obj.className = 'calendar-table-hover';
}