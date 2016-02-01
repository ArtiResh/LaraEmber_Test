<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index()
    {
        $data = App\Index::latest('created_at')->take(6)->get();
        return view('app',['data' => $data] );
    }
}
