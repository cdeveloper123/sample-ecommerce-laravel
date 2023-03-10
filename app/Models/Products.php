<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
	
	protected $fillable = [
		'category',
		'title',
        'slug',
        'image',
        'description',
        'sku',
        'qty',
        'price',
        'tag',
        'reorder',
        'nutrition_info',
        'status',
        'store_id'
    ];
	
	public function cartproducts()
    {
		return $this->hasMany('App\Models\CartProducts', 'product_id');
	}
	
	public function categoryTO()
    {
		return $this->belongsTo('App\Models\Category', 'category');
	}
}
