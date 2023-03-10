<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartProducts extends Model
{
    use HasFactory;
	
	protected $fillable = [
        'carts_id',
        'products_id',
        'quantity',
        'store_id',
    ];
	
	public function cart()
    {
		return $this->belongsTo('App\Models\Cart', 'carts_id');
	}
	
	public function product()
    {
		return $this->belongsTo('App\Models\Products', 'products_id');
	}
	
}
