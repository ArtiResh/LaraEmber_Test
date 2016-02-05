<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response ;
use App;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index()
    {
        try {
            $statusCode = 200;
            $response = [
                'tests' => []
            ];
            $tests = App\Index::all();
            foreach ($tests as $item) {
                $response['tests'][] = [
                    'id_test' => $item->id,
                    'title' => $item->title,
                    'text' => $item->text,
                ];
            }
        }catch (Exception $e){
            $statusCode = 400;
        }
        finally{
            //        return response()->json(compact('test'));
            return response()->json($response);
        }
    }
    public function delete($item_id){
        DB::table('books')->where('id', '=', "$item_id")->delete();
    }
}
