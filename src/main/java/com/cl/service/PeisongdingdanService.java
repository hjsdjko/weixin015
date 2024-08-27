package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.PeisongdingdanEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.PeisongdingdanView;


/**
 * 配送订单
 *
 * @author 
 * @email 
 * @date 2024-03-30 10:32:13
 */
public interface PeisongdingdanService extends IService<PeisongdingdanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<PeisongdingdanView> selectListView(Wrapper<PeisongdingdanEntity> wrapper);
   	
   	PeisongdingdanView selectView(@Param("ew") Wrapper<PeisongdingdanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<PeisongdingdanEntity> wrapper);
   	

}

