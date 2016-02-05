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
            'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. '],
            ['title' => 'Золотая рыбка',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'Ревизор',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'Война и Мир',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'Идиот',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'Преступление и наказание',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'Тихий дон',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'Мастер и маргарита',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'На дне',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'Герой нашего времени',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'],
            ['title' => 'Мы',
                'text' => 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.']);

        for($i=0;$i<6000;$i++){
            $bookArray[]=$bookArray[0];
        }

        DB::table('books')->insert($bookArray);
    }
}
