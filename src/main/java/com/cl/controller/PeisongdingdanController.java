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

import com.cl.entity.PeisongdingdanEntity;
import com.cl.entity.view.PeisongdingdanView;

import com.cl.service.PeisongdingdanService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 配送订单
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-30 10:32:13
 */
@RestController
@RequestMapping("/peisongdingdan")
public class PeisongdingdanController {
    @Autowired
    private PeisongdingdanService peisongdingdanService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,PeisongdingdanEntity peisongdingdan,
		HttpServletRequest request){
        EntityWrapper<PeisongdingdanEntity> ew = new EntityWrapper<PeisongdingdanEntity>();

		PageUtils page = peisongdingdanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, peisongdingdan), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,PeisongdingdanEntity peisongdingdan, 
		HttpServletRequest request){
        EntityWrapper<PeisongdingdanEntity> ew = new EntityWrapper<PeisongdingdanEntity>();

		PageUtils page = peisongdingdanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, peisongdingdan), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( PeisongdingdanEntity peisongdingdan){
       	EntityWrapper<PeisongdingdanEntity> ew = new EntityWrapper<PeisongdingdanEntity>();
      	ew.allEq(MPUtil.allEQMapPre( peisongdingdan, "peisongdingdan")); 
        return R.ok().put("data", peisongdingdanService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(PeisongdingdanEntity peisongdingdan){
        EntityWrapper< PeisongdingdanEntity> ew = new EntityWrapper< PeisongdingdanEntity>();
 		ew.allEq(MPUtil.allEQMapPre( peisongdingdan, "peisongdingdan")); 
		PeisongdingdanView peisongdingdanView =  peisongdingdanService.selectView(ew);
		return R.ok("查询配送订单成功").put("data", peisongdingdanView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        PeisongdingdanEntity peisongdingdan = peisongdingdanService.selectById(id);
		peisongdingdan = peisongdingdanService.selectView(new EntityWrapper<PeisongdingdanEntity>().eq("id", id));
        return R.ok().put("data", peisongdingdan);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        PeisongdingdanEntity peisongdingdan = peisongdingdanService.selectById(id);
		peisongdingdan = peisongdingdanService.selectView(new EntityWrapper<PeisongdingdanEntity>().eq("id", id));
        return R.ok().put("data", peisongdingdan);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody PeisongdingdanEntity peisongdingdan, HttpServletRequest request){
    	peisongdingdan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(peisongdingdan);
        peisongdingdanService.insert(peisongdingdan);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody PeisongdingdanEntity peisongdingdan, HttpServletRequest request){
    	peisongdingdan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(peisongdingdan);
        peisongdingdanService.insert(peisongdingdan);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody PeisongdingdanEntity peisongdingdan, HttpServletRequest request){
        //ValidatorUtils.validateEntity(peisongdingdan);
        peisongdingdanService.updateById(peisongdingdan);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        peisongdingdanService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}