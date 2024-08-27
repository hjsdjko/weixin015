package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.PeisongjiedanEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.PeisongjiedanView;


/**
 * 配送接单
 *
 * @author 
 * @email 
 * @date 2024-03-30 10:32:13
 */
public interface PeisongjiedanService extends IService<PeisongjiedanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<PeisongjiedanView> selectListView(Wrapper<PeisongjiedanEntity> wrapper);
   	
   	PeisongjiedanView selectView(@Param("ew") Wrapper<PeisongjiedanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<PeisongjiedanEntity> wrapper);
   	

}

