package com.app.ordertableweb.domain.aggregates;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Base64;
import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Set;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;
import org.hibernate.annotations.Synchronize;
import org.springframework.validation.annotation.Validated;
import com.app.ordertableweb.domain.utils.ByteConverter;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;
import com.app.ordertableweb.domain.utils.StringConverter;

/*
* You need to add annotations on the RestaurantTimeperiodAccount category to indicate that it is an @Entity,
* But there is no need to specify the table name since you will be using a view rather than a table. In addition, you also need to add the @Immutable annotation on the category,
* to indicate that this entity is immutable.
*/
@Entity
@Immutable
@Subselect("SELECT * FROM restaurant_timeperiod_account")
@Synchronize({"account","timeperiod","restaurant"}) //tables impacted
public class RestaurantTimeperiodAccount implements java.io.Serializable {
	@Id
	@Column(name = "restaurant_timeperiod_account_id", updatable = false, insertable = false, nullable = false)
	@JsonProperty("restaurant_timeperiod_account_id")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String restaurant_timeperiod_account_id;
	@Column(name = "account_TTT_account_id")
	@JsonProperty("account_TTT_account_id")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String account_TTT_account_id;
	@Column(name = "account_TTT_first_name")
	@JsonProperty("account_TTT_first_name")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String account_TTT_first_name;
	@Column(name = "account_TTT_last_name")
	@JsonProperty("account_TTT_last_name")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String account_TTT_last_name;
	@Column(name = "account_TTT_username")
	@JsonProperty("account_TTT_username")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String account_TTT_username;
	@Column(name = "account_TTT_email")
	@JsonProperty("account_TTT_email")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String account_TTT_email;
	@Column(name = "account_TTT_contact_number")
	@JsonProperty("account_TTT_contact_number")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String account_TTT_contact_number;
	@Column(name = "timeperiod_TTT_timeperiod_id")
	@JsonProperty("timeperiod_TTT_timeperiod_id")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String timeperiod_TTT_timeperiod_id;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name="timeperiod_TTT_start_period",columnDefinition = "DATE")  // Specify the column type explicitly if needed
	@JsonProperty("timeperiod_TTT_start_period")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date timeperiod_TTT_start_period;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name="timeperiod_TTT_end_period",columnDefinition = "DATE")  // Specify the column type explicitly if needed
	@JsonProperty("timeperiod_TTT_end_period")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date timeperiod_TTT_end_period;
	@Column(name = "restaurant_TTT_restaurant_id")
	@JsonProperty("restaurant_TTT_restaurant_id")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String restaurant_TTT_restaurant_id;
	@Column(name = "restaurant_TTT_name")
	@JsonProperty("restaurant_TTT_name")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String restaurant_TTT_name;
	@Column(name = "restaurant_TTT_image")
	@JsonProperty("restaurant_TTT_image")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String restaurant_TTT_image;
	@Column(name = "restaurant_TTT_location")
	@JsonProperty("restaurant_TTT_location")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String restaurant_TTT_location;
	@Column(name = "restaurant_TTT_contact_number")
	@JsonProperty("restaurant_TTT_contact_number")
	@JsonFormat(shape = JsonFormat.Shape.NUMBER_INT)
	private Integer restaurant_TTT_contact_number;
	@Column(name = "restaurant_TTT_longitude")
	@JsonProperty("restaurant_TTT_longitude")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String restaurant_TTT_longitude;
	@Column(name = "restaurant_TTT_latitude")
	@JsonProperty("restaurant_TTT_latitude")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String restaurant_TTT_latitude;
	@Column(name = "restaurant_TTT_description")
	@JsonProperty("restaurant_TTT_description")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String restaurant_TTT_description;
	public RestaurantTimeperiodAccount() {
	}
	public RestaurantTimeperiodAccount(
	String restaurant_timeperiod_account_id
	,
	String account_TTT_account_id
	,
	String account_TTT_first_name
	,
	String account_TTT_last_name
	,
	String account_TTT_username
	,
	String account_TTT_email
	,
	String account_TTT_contact_number
	,
	String timeperiod_TTT_timeperiod_id
	,
	Date timeperiod_TTT_start_period
	,
	Date timeperiod_TTT_end_period
	,
	String restaurant_TTT_restaurant_id
	,
	String restaurant_TTT_name
	,
	String restaurant_TTT_image
	,
	String restaurant_TTT_location
	,
	Integer restaurant_TTT_contact_number
	,
	String restaurant_TTT_longitude
	,
	String restaurant_TTT_latitude
	,
	String restaurant_TTT_description
	) {
		this.restaurant_timeperiod_account_id = restaurant_timeperiod_account_id;
		this.account_TTT_account_id = account_TTT_account_id;
		this.account_TTT_first_name = account_TTT_first_name;
		this.account_TTT_last_name = account_TTT_last_name;
		this.account_TTT_username = account_TTT_username;
		this.account_TTT_email = account_TTT_email;
		this.account_TTT_contact_number = account_TTT_contact_number;
		this.timeperiod_TTT_timeperiod_id = timeperiod_TTT_timeperiod_id;
		this.timeperiod_TTT_start_period = timeperiod_TTT_start_period;
		this.timeperiod_TTT_end_period = timeperiod_TTT_end_period;
		this.restaurant_TTT_restaurant_id = restaurant_TTT_restaurant_id;
		this.restaurant_TTT_name = restaurant_TTT_name;
		this.restaurant_TTT_image = restaurant_TTT_image;
		this.restaurant_TTT_location = restaurant_TTT_location;
		this.restaurant_TTT_contact_number = restaurant_TTT_contact_number;
		this.restaurant_TTT_longitude = restaurant_TTT_longitude;
		this.restaurant_TTT_latitude = restaurant_TTT_latitude;
		this.restaurant_TTT_description = restaurant_TTT_description;
		this.Init();
	}
	public void Init() {
	}
	public void setRestaurantTimeperiodAccountId(String restaurant_timeperiod_account_id) {
		this.restaurant_timeperiod_account_id = restaurant_timeperiod_account_id;
	}
	public String getRestaurantTimeperiodAccountId() {
		return this.restaurant_timeperiod_account_id;
	}
	public void setAccountTTTAccountId(String account_TTT_account_id) {
		this.account_TTT_account_id = account_TTT_account_id;
	}
	public String getAccountTTTAccountId() {
		return this.account_TTT_account_id;
	}
	public void setAccountTTTFirstName(String account_TTT_first_name) {
		this.account_TTT_first_name = account_TTT_first_name;
	}
	public String getAccountTTTFirstName() {
		return this.account_TTT_first_name;
	}
	public void setAccountTTTLastName(String account_TTT_last_name) {
		this.account_TTT_last_name = account_TTT_last_name;
	}
	public String getAccountTTTLastName() {
		return this.account_TTT_last_name;
	}
	public void setAccountTTTUsername(String account_TTT_username) {
		this.account_TTT_username = account_TTT_username;
	}
	public String getAccountTTTUsername() {
		return this.account_TTT_username;
	}
	public void setAccountTTTEmail(String account_TTT_email) {
		this.account_TTT_email = account_TTT_email;
	}
	public String getAccountTTTEmail() {
		return this.account_TTT_email;
	}
	public void setAccountTTTContactNumber(String account_TTT_contact_number) {
		this.account_TTT_contact_number = account_TTT_contact_number;
	}
	public String getAccountTTTContactNumber() {
		return this.account_TTT_contact_number;
	}
	public void setTimeperiodTTTTimeperiodId(String timeperiod_TTT_timeperiod_id) {
		this.timeperiod_TTT_timeperiod_id = timeperiod_TTT_timeperiod_id;
	}
	public String getTimeperiodTTTTimeperiodId() {
		return this.timeperiod_TTT_timeperiod_id;
	}
	public void setTimeperiodTTTStartPeriod(Date timeperiod_TTT_start_period) {
		this.timeperiod_TTT_start_period = timeperiod_TTT_start_period;
	}
	public Date getTimeperiodTTTStartPeriod() {
		return this.timeperiod_TTT_start_period;
	}
	public void setTimeperiodTTTEndPeriod(Date timeperiod_TTT_end_period) {
		this.timeperiod_TTT_end_period = timeperiod_TTT_end_period;
	}
	public Date getTimeperiodTTTEndPeriod() {
		return this.timeperiod_TTT_end_period;
	}
	public void setRestaurantTTTRestaurantId(String restaurant_TTT_restaurant_id) {
		this.restaurant_TTT_restaurant_id = restaurant_TTT_restaurant_id;
	}
	public String getRestaurantTTTRestaurantId() {
		return this.restaurant_TTT_restaurant_id;
	}
	public void setRestaurantTTTName(String restaurant_TTT_name) {
		this.restaurant_TTT_name = restaurant_TTT_name;
	}
	public String getRestaurantTTTName() {
		return this.restaurant_TTT_name;
	}
	public void setRestaurantTTTImage(String restaurant_TTT_image) {
		this.restaurant_TTT_image = restaurant_TTT_image;
	}
	public String getRestaurantTTTImage() {
		return this.restaurant_TTT_image;
	}
	public void setRestaurantTTTLocation(String restaurant_TTT_location) {
		this.restaurant_TTT_location = restaurant_TTT_location;
	}
	public String getRestaurantTTTLocation() {
		return this.restaurant_TTT_location;
	}
	public void setRestaurantTTTContactNumber(Integer restaurant_TTT_contact_number) {
		this.restaurant_TTT_contact_number = restaurant_TTT_contact_number;
	}
	public Integer getRestaurantTTTContactNumber() {
		return this.restaurant_TTT_contact_number;
	}
	public void setRestaurantTTTLongitude(String restaurant_TTT_longitude) {
		this.restaurant_TTT_longitude = restaurant_TTT_longitude;
	}
	public String getRestaurantTTTLongitude() {
		return this.restaurant_TTT_longitude;
	}
	public void setRestaurantTTTLatitude(String restaurant_TTT_latitude) {
		this.restaurant_TTT_latitude = restaurant_TTT_latitude;
	}
	public String getRestaurantTTTLatitude() {
		return this.restaurant_TTT_latitude;
	}
	public void setRestaurantTTTDescription(String restaurant_TTT_description) {
		this.restaurant_TTT_description = restaurant_TTT_description;
	}
	public String getRestaurantTTTDescription() {
		return this.restaurant_TTT_description;
	}
	@Override
	public String toString() {
		return "RestaurantTimeperiodAccount [" +
		"restaurant_timeperiod_account_id"+
		"=" + StringConverter.toString(this.restaurant_timeperiod_account_id)+
		","+
		"account_TTT_account_id"+
		"=" + StringConverter.toString(this.account_TTT_account_id)+
		","+
		"account_TTT_first_name"+
		"=" + StringConverter.toString(this.account_TTT_first_name)+
		","+
		"account_TTT_last_name"+
		"=" + StringConverter.toString(this.account_TTT_last_name)+
		","+
		"account_TTT_username"+
		"=" + StringConverter.toString(this.account_TTT_username)+
		","+
		"account_TTT_email"+
		"=" + StringConverter.toString(this.account_TTT_email)+
		","+
		"account_TTT_contact_number"+
		"=" + StringConverter.toString(this.account_TTT_contact_number)+
		","+
		"timeperiod_TTT_timeperiod_id"+
		"=" + StringConverter.toString(this.timeperiod_TTT_timeperiod_id)+
		","+
		"timeperiod_TTT_start_period"+
		"=" + StringConverter.toString(this.timeperiod_TTT_start_period)+
		","+
		"timeperiod_TTT_end_period"+
		"=" + StringConverter.toString(this.timeperiod_TTT_end_period)+
		","+
		"restaurant_TTT_restaurant_id"+
		"=" + StringConverter.toString(this.restaurant_TTT_restaurant_id)+
		","+
		"restaurant_TTT_name"+
		"=" + StringConverter.toString(this.restaurant_TTT_name)+
		","+
		"restaurant_TTT_image"+
		"=" + StringConverter.toString(this.restaurant_TTT_image)+
		","+
		"restaurant_TTT_location"+
		"=" + StringConverter.toString(this.restaurant_TTT_location)+
		","+
		"restaurant_TTT_contact_number"+
		"=" + StringConverter.toString(this.restaurant_TTT_contact_number)+
		","+
		"restaurant_TTT_longitude"+
		"=" + StringConverter.toString(this.restaurant_TTT_longitude)+
		","+
		"restaurant_TTT_latitude"+
		"=" + StringConverter.toString(this.restaurant_TTT_latitude)+
		","+
		"restaurant_TTT_description"+
		"=" + StringConverter.toString(this.restaurant_TTT_description)+
		"]";
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj){
			return true;
		}
		if (obj == null){
			return false;
		}
		if (getClass() != obj.getClass()){
			return false;
		}
		RestaurantTimeperiodAccount other = (RestaurantTimeperiodAccount) obj;
		return Objects.equals(this.restaurant_timeperiod_account_id, other.restaurant_timeperiod_account_id)
			&& Objects.equals(this.account_TTT_account_id, other.account_TTT_account_id)
			&& Objects.equals(this.account_TTT_first_name, other.account_TTT_first_name)
			&& Objects.equals(this.account_TTT_last_name, other.account_TTT_last_name)
			&& Objects.equals(this.account_TTT_username, other.account_TTT_username)
			&& Objects.equals(this.account_TTT_email, other.account_TTT_email)
			&& Objects.equals(this.account_TTT_contact_number, other.account_TTT_contact_number)
			&& Objects.equals(this.timeperiod_TTT_timeperiod_id, other.timeperiod_TTT_timeperiod_id)
			&& Objects.equals(this.timeperiod_TTT_start_period, other.timeperiod_TTT_start_period)
			&& Objects.equals(this.timeperiod_TTT_end_period, other.timeperiod_TTT_end_period)
			&& Objects.equals(this.restaurant_TTT_restaurant_id, other.restaurant_TTT_restaurant_id)
			&& Objects.equals(this.restaurant_TTT_name, other.restaurant_TTT_name)
			&& Objects.equals(this.restaurant_TTT_image, other.restaurant_TTT_image)
			&& Objects.equals(this.restaurant_TTT_location, other.restaurant_TTT_location)
			&& Objects.equals(this.restaurant_TTT_contact_number, other.restaurant_TTT_contact_number)
			&& Objects.equals(this.restaurant_TTT_longitude, other.restaurant_TTT_longitude)
			&& Objects.equals(this.restaurant_TTT_latitude, other.restaurant_TTT_latitude)
			&& Objects.equals(this.restaurant_TTT_description, other.restaurant_TTT_description);
	}
}