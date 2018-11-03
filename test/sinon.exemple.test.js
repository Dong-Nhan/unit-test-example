const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");

function isValidUser(condition, callback){
  if(condition){
    callback(true);
  }
  else callback(false)
}

describe('Check isValidUser', function() {
  it('should call the callback function to be true', function() {
    var callback = sinon.spy();
    isValidUser(true, callback);
    expect(callback.getCall(0).args[0]).to.be.true;
  });
});

let $ = { post: () => {}};

function saveUser(user, callback) {
  //gọi ajax thật sự - tốn thời gian và khó test
  $.post('/users', {
    first: user.firstname,
    last: user.lastname
  }, callback);
}

describe('saveUser', function() {
  it('should call callback after saving', function() {
    //sử dụng stub ở để ngăn chặn việc gọi ajax thật sự
    var post = sinon.stub($, 'post');
    //tự động gọi callback đầu tiên trong danh sách tham số
    post.yields();
    //kết hợp với spy để kiểm tra callback
    var callback = sinon.spy();

    saveUser({ firstname: 'Nhan', lastname: 'Nguyen' }, callback);

    //trả lại trạng thái ban đầu cho hàm mục tiêu
    post.restore();
    sinon.assert.calledOnce(callback);
  });
});

//database example
Database = {
  save: function(user, callback) {
    
  }
}

function setupNewUser(info, callback) {
  var user = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };
  try {
    Database.save(user, callback);
  }
  catch(err) {
    callback(err);
  }
}

it('should pass object with correct values to save only once', function() {
  var info = { name: 'test' };
  var expectedUser = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };
  var database = sinon.mock(Database);
  database.expects('save').once().withArgs(expectedUser);

  setupNewUser(info, function() { });

  database.verify();
  database.restore();
});