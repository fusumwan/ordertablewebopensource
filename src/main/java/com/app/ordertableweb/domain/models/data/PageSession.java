package com.app.ordertableweb.domain.models.data;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PageSession implements java.io.Serializable {

	/*
	* If you want to make a List<Index> parameter for JSON serialization,
	* you need to making Index class static,
	* because by making the Index class static,
	* you have decoupled it from the enclosing PageSession class,
	* allowing it to be instantiated without a reference to a PageSession instance.
	*/
	public static class Index implements java.io.Serializable {


		@JsonProperty("reserve_date")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String reserve_date;

		@JsonProperty("person")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String person;

		@JsonProperty("numbers")
		@JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
		private List<Integer> numbers;


		public String getReserve_date() {
			return reserve_date;
		}

		public void setReserve_date(String reserve_date) {
			this.reserve_date = reserve_date;
		}

		public String getPerson() {
			return person;
		}

		public void setPerson(String person) {
			this.person = person;
		}

		public List<Integer> getNumbers() {
			return numbers;
		}

		public void setNumbers(List<Integer> numbers) {
			this.numbers = numbers;
		}

	}

	/*
	* If you want to make a List<Restaurant_manage> parameter for JSON serialization,
	* you need to making Restaurant_manage class static,
	* because by making the Restaurant_manage class static,
	* you have decoupled it from the enclosing PageSession class,
	* allowing it to be instantiated without a reference to a PageSession instance.
	*/
	public static class Restaurant_manage implements java.io.Serializable {


		@JsonProperty("person")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String person;


		public String getPerson() {
			return person;
		}

		public void setPerson(String person) {
			this.person = person;
		}

	}

	/*
	* If you want to make a List<Map> parameter for JSON serialization,
	* you need to making Map class static,
	* because by making the Map class static,
	* you have decoupled it from the enclosing PageSession class,
	* allowing it to be instantiated without a reference to a PageSession instance.
	*/
	public static class Map implements java.io.Serializable {


		@JsonProperty("tables")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String tables;

		@JsonProperty("reserve_date")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String reserve_date;


		public String getTables() {
			return tables;
		}

		public void setTables(String tables) {
			this.tables = tables;
		}

		public String getReserve_date() {
			return reserve_date;
		}

		public void setReserve_date(String reserve_date) {
			this.reserve_date = reserve_date;
		}

	}

	/*
	* If you want to make a List<Result> parameter for JSON serialization,
	* you need to making Result class static,
	* because by making the Result class static,
	* you have decoupled it from the enclosing PageSession class,
	* allowing it to be instantiated without a reference to a PageSession instance.
	*/
	public static class Result implements java.io.Serializable {


		@JsonProperty("tables")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String tables;

		@JsonProperty("reserve_date")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String reserve_date;


		public String getTables() {
			return tables;
		}

		public void setTables(String tables) {
			this.tables = tables;
		}

		public String getReserve_date() {
			return reserve_date;
		}

		public void setReserve_date(String reserve_date) {
			this.reserve_date = reserve_date;
		}

	}

	/*
	* If you want to make a List<Order> parameter for JSON serialization,
	* you need to making Order class static,
	* because by making the Order class static,
	* you have decoupled it from the enclosing PageSession class,
	* allowing it to be instantiated without a reference to a PageSession instance.
	*/
	public static class Order implements java.io.Serializable {


		@JsonProperty("tables")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String tables;

		@JsonProperty("reserve_date")
		@JsonFormat(shape = JsonFormat.Shape.STRING)
		private String reserve_date;

		@JsonProperty("numbers")
		@JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
		private List<Integer> numbers;


		public String getTables() {
			return tables;
		}

		public void setTables(String tables) {
			this.tables = tables;
		}

		public String getReserve_date() {
			return reserve_date;
		}

		public void setReserve_date(String reserve_date) {
			this.reserve_date = reserve_date;
		}

		public List<Integer> getNumbers() {
			return numbers;
		}

		public void setNumbers(List<Integer> numbers) {
			this.numbers = numbers;
		}

	}


	@JsonProperty("index")

	private Index index;

	@JsonProperty("login")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String login;

	@JsonProperty("signup")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String signup;

	@JsonProperty("restaurant_manage")

	private Restaurant_manage restaurant_manage;

	@JsonProperty("manage_booking")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String manage_booking;

	@JsonProperty("confirm_booking")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String confirm_booking;

	@JsonProperty("accountInfo")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String accountInfo;

	@JsonProperty("map")

	private Map map;

	@JsonProperty("result")

	private Result result;

	@JsonProperty("numbers")
	@JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
	private List<Integer> numbers;

	@JsonProperty("orders")
	@JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
	private List<Order> orders;


	public Index getIndex() {
		return index;
	}

	public void setIndex(Index index) {
		this.index = index;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSignup() {
		return signup;
	}

	public void setSignup(String signup) {
		this.signup = signup;
	}

	public Restaurant_manage getRestaurant_manage() {
		return restaurant_manage;
	}

	public void setRestaurant_manage(Restaurant_manage restaurant_manage) {
		this.restaurant_manage = restaurant_manage;
	}

	public String getManage_booking() {
		return manage_booking;
	}

	public void setManage_booking(String manage_booking) {
		this.manage_booking = manage_booking;
	}

	public String getConfirm_booking() {
		return confirm_booking;
	}

	public void setConfirm_booking(String confirm_booking) {
		this.confirm_booking = confirm_booking;
	}

	public String getAccountinfo() {
		return accountInfo;
	}

	public void setAccountinfo(String accountInfo) {
		this.accountInfo = accountInfo;
	}

	public Map getMap() {
		return map;
	}

	public void setMap(Map map) {
		this.map = map;
	}

	public Result getResult() {
		return result;
	}

	public void setResult(Result result) {
		this.result = result;
	}

	public List<Integer> getNumbers() {
		return numbers;
	}

	public void setNumbers(List<Integer> numbers) {
		this.numbers = numbers;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

}