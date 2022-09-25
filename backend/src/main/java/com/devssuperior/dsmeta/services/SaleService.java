package com.devssuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devssuperior.dsmeta.entities.Sale;
import com.devssuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales(){
		return repository.findAll();
	}

}
