require 'test_helper'

class TracksControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get get" do
    get :get
    assert_response :success
  end

end
