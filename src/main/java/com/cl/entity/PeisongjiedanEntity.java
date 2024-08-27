package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 配送接单
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-03-30 10:32:13
 */
@TableName("peisongjiedan")
public class PeisongjiedanEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public PeisongjiedanEntity() {
		
	}
	
	public PeisongjiedanEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 订单编号
	 */
					
	private String dingdanbianhao;
	
	/**
	 * 收货人
	 */
					
	private String shouhuoren;
	
	/**
	 * 地址
	 */
					
	private String dizhi;
	
	/**
	 * 手机号码
	 */
					
	private String shoujihaoma;
	
	/**
	 * 接单时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date jiedanshijian;
	
	/**
	 * 配送员账号
	 */
					
	private String peisongyuanzhanghao;
	
	/**
	 * 配送员姓名
	 */
					
	private String peisongyuanxingming;
	
	/**
	 * 联系电话
	 */
					
	private String lianxidianhua;
	
	/**
	 * 配送状态
	 */
					
	private String peisongzhuangtai;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：订单编号
	 */
	public void setDingdanbianhao(String dingdanbianhao) {
		this.dingdanbianhao = dingdanbianhao;
	}
	/**
	 * 获取：订单编号
	 */
	public String getDingdanbianhao() {
		return dingdanbianhao;
	}
	/**
	 * 设置：收货人
	 */
	public void setShouhuoren(String shouhuoren) {
		this.shouhuoren = shouhuoren;
	}
	/**
	 * 获取：收货人
	 */
	public String getShouhuoren() {
		return shouhuoren;
	}
	/**
	 * 设置：地址
	 */
	public void setDizhi(String dizhi) {
		this.dizhi = dizhi;
	}
	/**
	 * 获取：地址
	 */
	public String getDizhi() {
		return dizhi;
	}
	/**
	 * 设置：手机号码
	 */
	public void setShoujihaoma(String shoujihaoma) {
		this.shoujihaoma = shoujihaoma;
	}
	/**
	 * 获取：手机号码
	 */
	public String getShoujihaoma() {
		return shoujihaoma;
	}
	/**
	 * 设置：接单时间
	 */
	public void setJiedanshijian(Date jiedanshijian) {
		this.jiedanshijian = jiedanshijian;
	}
	/**
	 * 获取：接单时间
	 */
	public Date getJiedanshijian() {
		return jiedanshijian;
	}
	/**
	 * 设置：配送员账号
	 */
	public void setPeisongyuanzhanghao(String peisongyuanzhanghao) {
		this.peisongyuanzhanghao = peisongyuanzhanghao;
	}
	/**
	 * 获取：配送员账号
	 */
	public String getPeisongyuanzhanghao() {
		return peisongyuanzhanghao;
	}
	/**
	 * 设置：配送员姓名
	 */
	public void setPeisongyuanxingming(String peisongyuanxingming) {
		this.peisongyuanxingming = peisongyuanxingming;
	}
	/**
	 * 获取：配送员姓名
	 */
	public String getPeisongyuanxingming() {
		return peisongyuanxingming;
	}
	/**
	 * 设置：联系电话
	 */
	public void setLianxidianhua(String lianxidianhua) {
		this.lianxidianhua = lianxidianhua;
	}
	/**
	 * 获取：联系电话
	 */
	public String getLianxidianhua() {
		return lianxidianhua;
	}
	/**
	 * 设置：配送状态
	 */
	public void setPeisongzhuangtai(String peisongzhuangtai) {
		this.peisongzhuangtai = peisongzhuangtai;
	}
	/**
	 * 获取：配送状态
	 */
	public String getPeisongzhuangtai() {
		return peisongzhuangtai;
	}

}
