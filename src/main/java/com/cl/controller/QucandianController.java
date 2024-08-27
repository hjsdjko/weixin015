package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.QucandianEntity;
import com.cl.entity.view.QucandianView;

import com.cl.service.QucandianService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 取餐点
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-30 10:32:12
 */
@RestController
@RequestMapping("/qucandian")
public class QucandianController {
    @Autowired
    private QucandianService qucandianService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,QucandianEntity qucandian,
		HttpServletRequest request){
        EntityWrapper<QucandianEntity> ew = new EntityWrapper<QucandianEntity>();

		PageUtils page = qucandianService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, qucandian), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,QucandianEntity qucandian, 
		HttpServletRequest request){
        EntityWrapper<QucandianEntity> ew = new EntityWrapper<QucandianEntity>();

		PageUtils page = qucandianService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, qucandian), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( QucandianEntity qucandian){
       	EntityWrapper<QucandianEntity> ew = new EntityWrapper<QucandianEntity>();
      	ew.allEq(MPUtil.allEQMapPre( qucandian, "qucandian")); 
        return R.ok().put("data", qucandianService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(QucandianEntity qucandian){
        EntityWrapper< QucandianEntity> ew = new EntityWrapper< QucandianEntity>();
 		ew.allEq(MPUtil.allEQMapPre( qucandian, "qucandian")); 
		QucandianView qucandianView =  qucandianService.selectView(ew);
		return R.ok("查询取餐点成功").put("data", qucandianView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        QucandianEntity qucandian = qucandianService.selectById(id);
		qucandian = qucandianService.selectView(new EntityWrapper<QucandianEntity>().eq("id", id));
        return R.ok().put("data", qucandian);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        QucandianEntity qucandian = qucandianService.selectById(id);
		qucandian = qucandianService.selectView(new EntityWrapper<QucandianEntity>().eq("id", id));
        return R.ok().put("data", qucandian);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody QucandianEntity qucandian, HttpServletRequest request){
    	qucandian.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(qucandian);
        qucandianService.insert(qucandian);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody QucandianEntity qucandian, HttpServletRequest request){
    	qucandian.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(qucandian);
        qucandianService.insert(qucandian);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody QucandianEntity qucandian, HttpServletRequest request){
        //ValidatorUtils.validateEntity(qucandian);
        qucandianService.updateById(qucandian);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        qucandianService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
