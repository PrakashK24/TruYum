package com.cognizant.truyum.dao;

import java.util.List;
import com.cognizant.truyum.model.MenuItem;

/**
 * 
 * @author Prakash_K
 *
 */
public interface CartDao {
	public void addCartItem(long userId, long menuItemId);

	public List<MenuItem> getAllCartItem(long userId) throws CartEmptyException;

	public void removeCartItem(long userId, long menuItemId);
}
