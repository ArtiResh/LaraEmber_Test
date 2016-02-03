<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->delete();
        $bookArray = array(['title' => 'Золотая рыбка',
            'text' => 'ФСБ РФ проводит масштабную операцию на территории '],
            ['title' => 'Ревизок',
                'text' => 'Корм проводит масштабную операцию на территории ']);
        DB::table('books')->insert($bookArray);
    }
}
