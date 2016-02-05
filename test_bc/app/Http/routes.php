<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => 'api'], function() {
    Route::resource('tests', 'IndexController@index');
    Route::post('tests/{id}', 'IndexController@delete');
//    Route::get('test/{id}', 'IndexController@show');
//    Route::put('test/{id}', 'IndexController@update');
});

Route::get('ember/{data?}', function()
{
    return View::make('app');
})->where('data', '.*');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

/*Route::group(['middleware' => ['web']], function () {
    //
});*/
